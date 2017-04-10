import * as Http from "http";
import {Service} from "ts-express-decorators";
import * as SocketIO from "socket.io";

@Service()
export default class SocketService {
    private io: SocketIO.Server;
    private stacks = [];

    constructor() {

    }
    /**
     * Store all callbacks that will be adding to socket.io instance when
     *  it'll be created. See SocketService.createServer().
     */
    public onConnection(callback: Function): SocketService {
        this.stacks.push(callback);
        return this;
    }

    public emit = (...args) => (this.io as any).emit(...args);

    createServer(httpServer: Http.Server)  {
        this.io = SocketIO(httpServer);

        // Map all callbacks to this connection events.
        this.stacks.forEach(cb => this.io.on('connection', cb));
    }
}