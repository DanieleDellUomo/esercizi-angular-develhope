import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface iUser {
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: string,
  address: Address,
  role: Role,
  username: string,
  profilePhotoUrl: string,
  gender: Gender
}
interface Address {
  city: string;
  street: string;
  postalCode: string;
}
export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}
export enum Role {
  STAFF,
  MANAGER,
  ADMIN,
}

