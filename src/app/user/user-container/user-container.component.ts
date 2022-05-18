import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  showUserDetail: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(value: boolean) {
    this.showUserDetail = value;
  }

  closeDetail(value: false): void {
    this.showUserDetail = value;
  }

}
