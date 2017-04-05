import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

const CLICK_TO_HIDE_MESSAGE:string = "Cliquez sur ce texte pour cacher les utilisateurs hors ligne";
const CLICK_TO_SHOW_MESSAGE:string = "Cliquez sur ce texte pour afficher les utilisateurs hors ligne";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {

  constructor(private _userService: UserService) { }

  public users;
  public hideOffline: boolean = false;
  public captionMsg: String = CLICK_TO_HIDE_MESSAGE;

  ngOnInit() {
    this.users = this._userService.get();
  }

  showHideOfflineUser() {
    this.hideOffline = !this.hideOffline;
    this.captionMsg = !this.hideOffline ? CLICK_TO_HIDE_MESSAGE : CLICK_TO_SHOW_MESSAGE;
  }

}
