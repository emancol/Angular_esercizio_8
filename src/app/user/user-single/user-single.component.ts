import { Component, EventEmitter, OnInit, Output } from '@angular/core';

;

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Output() userDetail = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  showUserDetail(value: true) {
    this.userDetail.emit(value)
  }
}
