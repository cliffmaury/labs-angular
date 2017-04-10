
export enum Status{ online, offline, busy };

export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  status: Status;
}
