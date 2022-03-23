import { Component, OnInit, Input } from '@angular/core';
import { iUser} from "src/app/interface/interface.component";

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() singleE: iUser[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
