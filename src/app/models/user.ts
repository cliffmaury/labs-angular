export const Status: {[K in string]: K} = {
    online: "online",
    offline: "offline",
    busy: "busy"
};

export type Status = keyof typeof Status;

export class User {
    id: number;
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    status: Status;
}