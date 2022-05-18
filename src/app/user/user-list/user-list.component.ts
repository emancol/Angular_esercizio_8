import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [{}, {}, {}]

  @Output() showUserDetail = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(value: true) {
    this.showUserDetail.emit(value)
  }

}
