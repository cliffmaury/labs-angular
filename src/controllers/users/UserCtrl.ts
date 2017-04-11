import {
    Controller, Get, PathParams, Put, BodyParams, Post, Patch, Delete, Response, Required
} from "ts-express-decorators";
import {$log} from "ts-log-debug";
import {UsersService} from "../../services/UsersService";
import {IUser, PartialUser} from "../../models/User";
import {NotFound, Unauthorized} from "ts-httpexceptions";


@Controller("/users")
export class UserCtrl {

    constructor(private usersService: UsersService) {

    }

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

        return user;
    }

    @Get("/:email")
    public getByEmail(
      @PathParams("email") email: string
    ): IUser {
        return this.usersService.findByEmail(email);
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
    public create(
        @BodyParams("user") user: any
    ): IUser {
            $log.debug("rest create user", user)
        return this.usersService.create(user);
    }

    @Delete("/:id")
    public remove() {

    }

    @Get("/")
    public getList(): PartialUser[] {
        return this.usersService.queryPartial();
    }
}