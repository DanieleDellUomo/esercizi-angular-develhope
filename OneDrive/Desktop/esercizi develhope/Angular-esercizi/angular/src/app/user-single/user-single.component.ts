import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { iUser} from "src/app/interface/interface.component";

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() singleE: iUser[] = [];

  @Output() deleteUser = new EventEmitter<iUser>();

  deletElement(user: iUser) {
    this.deleteUser.emit({ ...user })
  }


  constructor() { }

  ngOnInit(): void {
  }

}
