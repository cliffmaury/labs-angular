export const Status: {[K in string]: K} = {
    online: "online",
    offline: "offline",
    busy: "busy"
};

export type Status = keyof typeof Status;

export class UserCredential {
    email: string;
    password: string;
}

export class User extends UserCredential {
    _id: string;
    firstName: string;
    lastName: string;
    status: Status;
}
