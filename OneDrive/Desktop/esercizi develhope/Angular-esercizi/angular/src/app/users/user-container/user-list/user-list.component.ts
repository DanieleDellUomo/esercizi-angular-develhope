import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() showuserdetail: boolean = false;
  @Output() toggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
