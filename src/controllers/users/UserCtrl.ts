import {
    Controller, Get, PathParams, Put, BodyParams, Post, Patch, Delete, Response
} from "ts-express-decorators";
import * as Express from "express";
import {UsersService} from "../../services/UsersService";
import {IUser, PartialUser} from "../../models/User";

@Controller("/users")
export class UserCtrl {

    constructor(private usersService: UsersService) {

    }

    @Post("/authenticate")
    public authenticate(@BodyParams("email") email: string, @BodyParams("password") password: string, @Response() response: Express.Response) {
        console.log("authenticate user with email", email, " & password ", password);
        let user:IUser = this.usersService.findByEmail(email);
        console.log("find user by email", user);
        if(null == user) {
            response.send(404, {error:["authentication failed", "user not found"]});
        }
        if(user.password !== password) {
            response.send(401, {error:["authentication failed", "wrong password"]});
        }
        response.send(200, user);
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
        console.log("patch from email", email, "with status", status);
        const user = this.usersService.findByEmail(email);
        user.status = status;
        console.log("patch user" ,user);
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
            console.log("rest create user", user)
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