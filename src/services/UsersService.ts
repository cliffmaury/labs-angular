import {Value} from "ts-json-properties";
import {Service} from "ts-express-decorators";
import {IUser} from "../models/User";

@Service()
export class UsersService {
    @Value("users.list")
    users: any[];

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
        const users: IUser[] = this.query();
        return users.find((value: IUser) => value.email === email);
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

        this.users.push(user);

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
     * @param user
     * @returns {IUser}
     */
    public update(user: IUser): IUser {

        const users = this.query();
        const index = this.users.find(o => user._id === o._id);

        users[index] = user;

        return user;
    }

    /**
     *
     * @param user
     * @returns {IUser}
     */
    public patch(user: IUser): IUser {

        const users = this.query();
        const index = this.users.find(o => user._id === o._id);

        users[index] = Object.assign(users[index], user);

        return users[index];
    }
}