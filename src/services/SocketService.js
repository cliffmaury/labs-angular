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
const SocketIO = require("socket.io");
let SocketService = class SocketService {
    constructor() {
        this.stacks = [];
        this.emit = (...args) => this.io.emit(...args);
    }
    /**
     * Store all callbacks that will be adding to socket.io instance when
     *  it'll be created. See SocketService.createServer().
     */
    onConnection(callback) {
        this.stacks.push(callback);
        return this;
    }
    createServer(httpServer) {
        this.io = SocketIO(httpServer);
        // Map all callbacks to this connection events.
        this.stacks.forEach(cb => this.io.on('connection', cb));
    }
};
SocketService = __decorate([
    ts_express_decorators_1.Service(), 
    __metadata('design:paramtypes', [])
], SocketService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SocketService;
//# sourceMappingURL=SocketService.js.map