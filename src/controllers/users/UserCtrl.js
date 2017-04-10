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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const ts_express_decorators_1 = require("ts-express-decorators");
const UsersService_1 = require("../../services/UsersService");
let UserCtrl = class UserCtrl {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getByEmail(email) {
        return this.usersService.findByEmail(email);
    }
    updateStatus(email, status) {
        const user = this.usersService.findByEmail(email);
        user.status = status;
        return this.usersService.patch(user);
    }
    update(id, user) {
        const oldUser = this.usersService.find(id);
        if (!!oldUser) {
        }
        return this.usersService.update(Object.assign(oldUser, user));
    }
    create(user) {
        return this.usersService.create(user);
    }
    remove() {
    }
    getList() {
        return this.usersService.query();
    }
};
__decorate([
    ts_express_decorators_1.Get("/:email"),
    __param(0, ts_express_decorators_1.PathParams("email")), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', Object)
], UserCtrl.prototype, "getByEmail", null);
__decorate([
    ts_express_decorators_1.Patch("/:email/:status"),
    __param(0, ts_express_decorators_1.PathParams("email")),
    __param(1, ts_express_decorators_1.PathParams("status")), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String, String]), 
    __metadata('design:returntype', Object)
], UserCtrl.prototype, "updateStatus", null);
__decorate([
    ts_express_decorators_1.Put("/:id"),
    __param(0, ts_express_decorators_1.PathParams("id")),
    __param(1, ts_express_decorators_1.BodyParams("user")), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String, Object]), 
    __metadata('design:returntype', Object)
], UserCtrl.prototype, "update", null);
__decorate([
    ts_express_decorators_1.Post("/"),
    __param(0, ts_express_decorators_1.BodyParams("user")), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', Object)
], UserCtrl.prototype, "create", null);
__decorate([
    ts_express_decorators_1.Delete("/:id"), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserCtrl.prototype, "remove", null);
__decorate([
    ts_express_decorators_1.Get("/"), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', Array)
], UserCtrl.prototype, "getList", null);
UserCtrl = __decorate([
    ts_express_decorators_1.Controller("/users"), 
    __metadata('design:paramtypes', [UsersService_1.UsersService])
], UserCtrl);
exports.UserCtrl = UserCtrl;
//# sourceMappingURL=UserCtrl.js.map