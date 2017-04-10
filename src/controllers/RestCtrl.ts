import {Controller, All, Get, RouteService, Render} from "ts-express-decorators";
import {$log} from "ts-log-debug";

@Controller("/")
export class RestCtrl {

    constructor (
        private routeService: RouteService
    ) {

    }

    @All('/')
    public test(): Object {
        return this.routeService.getAll();
    }

    @Get('/html')
    @Render("rest")
    public render() {
        return {endpoints: JSON.parse(JSON.stringify(this.routeService.getAll()))};
    }
}