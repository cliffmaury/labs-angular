
export type PartialUser = Partial<IUser>;

export interface IUser {
    _id: string;
    email: string;
    lastName: string;
    firstName: string;
    password?: string;
    status?: string;
}