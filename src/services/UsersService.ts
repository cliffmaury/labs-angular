import {Value} from "ts-json-properties";
import {Service} from "ts-express-decorators";
import {IUser, PartialUser} from "../models/User";
import {$log} from "ts-log-debug";

@Service()
export class UsersService {

    @Value("users.list")
    private USERS: any[];
    private users;

    constructor() {
        this.users = this.USERS.map(u => Object.assign({}, u));
    }

    /**
     *
     * @param email
     * @returns {boolean}
     */
    checkEmail(email: string): boolean {
        return !!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    }

    /**
     *
     * @param status
     * @returns {boolean}
     */
    checkStatus(status: string): boolean {
        return ["offline", "busy", "online"].indexOf(status) !== -1;
    }
    /**
     * Find a user by his ID.
     * @param id
     * @returns {undefined|IUser}
     */
    public find(id: string) {
        const users: IUser[] = this.query();
        return users.find((value: IUser) => value._id === id);
    }

    public findByEmail(email: string) {
        $log.debug("find by email", email);
        const users: IUser[] = this.query();
        $log.debug("users size", users.length);
        let user = users.find(user => user.email === email);
        $log.debug("user found", user);
        return user;
    }

    public findByCredential(email: string, password: string) {
        const users: IUser[] = this.query();
        return users.find((value: IUser) => value.email === email && value.password === password);
    }
    /**
     * Create a new User
     * @param name
     * @returns {{id: any, name: string}}
     */
    public create(user: IUser) {
        user._id = require("node-uuid").v4();
        $log.debug("create user", user);
        $log.debug("users size before insert", this.users.length);
        this.users.push(user);
        $log.debug("users size", this.users.length);
        return user;
    }

    /**
     *
     * @returns {IUser[]}
     */
    public query(): IUser[] {
        return this.users;
    }

    /**
     *
     * @param id
     * @param user
     * @returns {IUser}
     */
    public update(id: string, user: IUser | PartialUser): IUser {
        const users = this.query();
        $log.debug("users size", users.length);
        const index = this.users.findIndex(o => id === o._id);
        $log.debug("users index", index);

        users[index] = Object.assign(users[index], user);

        return users[index];
    }

    public remove(id: string) {
        const index = this.users.findIndex(o => id === o._id);
        this.users.splice(index, 1);
    }
}