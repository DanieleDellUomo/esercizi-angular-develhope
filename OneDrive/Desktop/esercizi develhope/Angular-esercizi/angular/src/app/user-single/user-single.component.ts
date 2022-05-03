import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() showuserdetail: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
