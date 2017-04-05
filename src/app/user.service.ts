import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  private users = [
    {id: 1, email: 'john.doe@gmail.com', status: 'online'},
    {id: 2, email: 'jane.doe@gmail.com', status: 'offline'},
    {id: 3, email: 'jean.dupond@gmail.com', status: 'online'},
    {id: 4, email: 'jean.dupont@gmail.com', status: 'online'},
    {id: 5, email: 'jeanne.dupond@gmail.com', status: 'offline'},
    {id: 5, email: 'joe.doe@gmail.com', status: 'offline'}
  ];

  get() {
    return this.users;
  }

}
