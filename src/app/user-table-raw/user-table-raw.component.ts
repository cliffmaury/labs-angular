import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-user-table-raw]',
  templateUrl: './user-table-raw.component.html',
  styleUrls: ['./user-table-raw.component.css']
})
export class UserTableRawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() hideOffline: boolean;
  @Input() user:{id: number, email: string, status: { online, offline }};

}
