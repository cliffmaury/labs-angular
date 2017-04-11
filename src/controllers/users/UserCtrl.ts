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

        let user: IUser = this.usersService.findByEmail(email);

        $log.debug("find user by email", user);

        if(null == user) {
            throw new NotFound("authentication failed, user not found");
        }

        if(user.password !== password) {
            throw new Unauthorized("authentication failed, wrong password");
        }

        user.status = "online";

        this.usersService.patch(user);

        return user;
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
        @PathParams("email") email: string,
        @PathParams("status") status: string
    ): IUser {

        $log.debug("patch from email", email, "with status", status);

        const user = this.usersService.findByEmail(email);
        user.status = status;

        $log.debug("patch user" ,user);

        return this.usersService.patch(user);
    }

    @Put("/:id")
    public update(
        @PathParams("id") id: string,
        @BodyParams("user") user: any
    ): IUser {
        const oldUser = this.usersService.find(id);

        if (!!oldUser) {

        }

        return this.usersService.update(Object.assign(oldUser, user));
    }

    @Post("/")
    @Status(201)
    public create(
        @Required() @BodyParams("user") user: IUser
    ): IUser {

        $log.debug("rest create user", user);

        if (!user.email || !user.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
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

    @Delete("/:id")
    public remove() {

    }

    @Get("/")
    public getList(): IUser[] {
        return this.usersService.query();
    }
}