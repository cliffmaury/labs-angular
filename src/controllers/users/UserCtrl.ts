import {
    Controller, Get, PathParams, Put, BodyParams, Post, Patch, Delete, Response, Required, Status
} from "ts-express-decorators";
import {$log} from "ts-log-debug";
import {UsersService} from "../../services/UsersService";
import {IUser, PartialUser} from "../../models/User";
import {NotFound, Unauthorized, BadRequest} from "ts-httpexceptions";


@Controller("/users")
export class UserCtrl {

    constructor(private usersService: UsersService) {

    }

    /**
     * Authenticate a user.
     * @param email
     * @param password
     * @returns {IUser}
     */
    @Post("/authenticate")
    public authenticate(
        @Required() @BodyParams("email") email: string,
        @Required() @BodyParams("password") password: string
    ) {

        $log.debug("authenticate user with email", email, " & password ", password);

        const user: IUser = this.usersService.findByEmail(email);

        $log.debug("find user by email", user);

        if(!user) {
            throw new NotFound("authentication failed, user not found");
        }

        if(user.password !== password) {
            throw new Unauthorized("authentication failed, wrong password");
        }

        return this.usersService.update(user._id, {status: "online"});
    }

    /**
     * Find a user by is mail or id.
     * @param idOrMail
     * @returns {IUser}
     */
    @Get("/:id")
    public get(
      @PathParams("id") idOrMail: string
    ): IUser {

        const user = this.usersService.findByEmail(idOrMail) || this.usersService.find(idOrMail)

        if (!user) {
            throw new NotFound("User not found.");
        }

        return user;
    }

    @Patch("/:email/:status")
    public updateStatus(
        @Required() @PathParams("email") email: string,
        @Required() @PathParams("status") status: string
    ): IUser {

        if (!this.usersService.checkStatus(status)) {
            throw new BadRequest("Wrong status");
        }

        if (!this.usersService.checkEmail(email)) {
            throw new BadRequest("Wrong email");
        }

        const user = this.usersService.findByEmail(email);

        if (!user) {
            throw new NotFound("User not found.")
        }

        $log.debug("patch from email", email, "with status", status);

        return this.usersService.update(user._id, {status});
    }

    /**
     *
     * @param id
     * @param user
     * @returns {IUser}
     */
    @Put("/:id")
    public update(
        @PathParams("id") id: string,
        @Required() @BodyParams("user") user: any
    ): IUser {
        const oldUser = this.usersService.find(id);

        if (!oldUser) {
            throw new NotFound("User not found.")
        }

        return this.usersService.update(oldUser._id, user);
    }

    /**
     *
     * @param user
     * @returns {IUser}
     */
    @Post("/")
    @Status(201)
    public create(
        @Required() @BodyParams("user") user: IUser
    ): IUser {

        $log.debug("rest create user", user);

        if (!user.email || !this.usersService.checkEmail(user.email)) {
           throw new BadRequest("Email are required");
        }

        if (!user.password) {
            throw new BadRequest("Password are required");
        }

        if (this.usersService.findByEmail(user.email)) {
            throw new BadRequest("User already created with this email.")
        }

        return this.usersService.create(user);
    }

    /**
     * Remove the user.
     * @param id
     * @returns {any}
     */
    @Delete("/:id")
    public remove(
        @PathParams("id") id: string
    ) {
        const oldUser = this.usersService.find(id);

        if (!oldUser) {
            throw new NotFound("User not found.")
        }

        return this.usersService.remove(id);
    }

    /**
     * Get All users.
     * @returns {IUser[]}
     */
    @Get("/")
    public getList(): IUser[] {

        return this.usersService.query().map(o => {

            o = Object.assign({}, o);
            delete o.password;

            return o;
        });
    }
}