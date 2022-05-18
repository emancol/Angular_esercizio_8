import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Output() closeDetailComp = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeUserDetail(value: false): void {
    this.closeDetailComp.emit(value)

  }

}
