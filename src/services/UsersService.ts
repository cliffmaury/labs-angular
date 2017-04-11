import {Value} from "ts-json-properties";
import {Service} from "ts-express-decorators";
import {IUser,PartialUser} from "../models/User";

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
        console.log("find by email", email);
        const users: IUser[] = this.query();
        console.log("users size", users.length);
        let user = users.find(user => user.email === email);
        console.log("user found", user);
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
        console.log("create user", user);
        console.log("users size before insert", this.users.length);
        this.users.push(user);
        console.log("users size", this.users.length);
        return user;
    }

    /**
     *
     * @returns {IUser[]}
     */
    public query(): IUser[] {
        return this.users;
    }

    public queryPartial(): PartialUser[] {
        let partialUsers:PartialUser[]=new Array();
        this.users.forEach( user => {
            partialUsers.push({_id:user._id, email:user.email, firstName:user.firstName, lastName:user.lastName, "status":'offline'})
        })

        return partialUsers;
    }

    /**
     *
     * @param user
     * @returns {IUser}
     */
    public update(user: IUser): IUser {

        const users = this.query();
        const index = this.users.findIndex(o => user._id === o._id);

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
        console.log("users size", users.length);
        const index = this.users.findIndex(o => user._id === o._id);
        console.log("users index", index);

        users[index] = Object.assign(users[index], user);
        return users[index];
    }
}