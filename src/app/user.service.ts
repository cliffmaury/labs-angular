import { Injectable } from '@angular/core';
import {User} from "../models/User";

@Injectable()
export class UserService {

  constructor() { }

  private users: User[] = [
    {id: 1, firstName: 'john', lastName:'doe', email: 'john.doe@gmail.com', status: 'online'},
    {id: 2, firstName: 'jane', lastName:'doe', email: 'jane.doe@gmail.com', status: 'online'},
    {id: 3, firstName: 'jean', lastName:'dupond', email: 'jean.dupond@gmail.com', status: 'busy'},
    {id: 4, firstName: 'jean', lastName:'dupont', email: 'jean.dupont@gmail.com', status: 'offline'},
    {id: 5, firstName: 'jeanne', lastName:'dupong', email: 'jeanne.dupond@gmail.com', status: 'offline'},
    {id: 6, firstName: 'john', lastName:'doe', email: 'joe.doe@gmail.com', status: 'online'}
  ];

  get(): User[] {
    return this.users;
  }

}
