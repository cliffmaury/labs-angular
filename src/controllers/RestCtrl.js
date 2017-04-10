"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const ts_express_decorators_1 = require("ts-express-decorators");
let RestCtrl = class RestCtrl {
    constructor(routeService) {
        this.routeService = routeService;
    }
    test() {
        return this.routeService.getAll();
    }
    render() {
        return { endpoints: JSON.parse(JSON.stringify(this.routeService.getAll())) };
    }
};
__decorate([
    ts_express_decorators_1.All('/'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', Object)
], RestCtrl.prototype, "test", null);
__decorate([
    ts_express_decorators_1.Get('/html'),
    ts_express_decorators_1.Render("rest"), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], RestCtrl.prototype, "render", null);
RestCtrl = __decorate([
    ts_express_decorators_1.Controller("/"), 
    __metadata('design:paramtypes', [ts_express_decorators_1.RouteService])
], RestCtrl);
exports.RestCtrl = RestCtrl;
//# sourceMappingURL=RestCtrl.js.map