import {
    Controller, Get, PathParams, Put, BodyParams, Post, Patch, Delete
} from "ts-express-decorators";
import {$log} from "ts-log-debug";

@Controller("/users")
export class UserCtrl {

    constructor(

    ) {

    }

    @Get('/:email')
    public getByEmail(
      @PathParams("email") email: string
    ) {




    }

    @Patch('/:email/:status')
    public updateStatus(
        @PathParams("email") email: string,
        @PathParams("status") status: string
    ) {

    }

    @Put("/:id")
    public update(
        @BodyParams("user") user: any
    ) {

    }

    @Post("/")
    public create(
        @BodyParams("user") user: any
    ) {

    }

    @Delete("/:id")
    public remove() {

    }

    @Get('/')
    public getList() {

    }
}