import {
    Controller, Get, PathParams, Put, BodyParams, Post, Patch, Delete
} from "ts-express-decorators";
import {UsersService} from "../../services/UsersService";
import {IUser} from "../../models/User";

@Controller("/users")
export class UserCtrl {

    constructor(private usersService: UsersService) {

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

        const user = this.usersService.findByEmail(email);
        user.status = status;

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