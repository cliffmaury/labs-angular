const Status = {
    online: "online",
    offline: "offline",
    busy: "busy"
};

type Status = keyof typeof Status;

export class User {
    id: number;
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    status: Status;
}