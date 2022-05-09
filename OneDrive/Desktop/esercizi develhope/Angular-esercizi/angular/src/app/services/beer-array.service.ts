import { Injectable } from '@angular/core';
import { Beer } from '../models/interface-beer';
import { BehaviorSubject, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerArrayService {

  array: Beer[] = [
    {
      id: 1,
      type: "small",
      name: "Burro Birra",
      price: 4
    },
    {
      id: 2,
      type: "small",
      name: "Porter",
      price: 3
    },
    {
      id: 3,
      type: "small",
      name: "Apa",
      price: 4.50
    },
    {
      id: 4,
      type: "small",
      name: "Ipa",
      price: 3.50
    },
    {
      id: 5,
      type: "medium",
      name: "Weiss",
      price: 5
    },
    {
      id: 6,
      type: "medium",
      name: "Stout",
      price: 6
    },
    {
      id: 7,
      type: "medium",
      name: "Trappista",
      price: 7
    },
    {
      id: 8,
      type: "medium",
      name: "Lager",
      price: 8
    },
    {
      id: 9,
      type: "small",
      name: "Strong Ale",
      price: 9
    },
    {
      id: 10,
      type: "small",
      name: "Abbazia",
      price: 10
    },
  ]

  subject = new BehaviorSubject<Beer[]>(this.array);
  arrayOb$ = this.subject.asObservable();

  getArray(): Observable<Beer[]>{
    return this.arrayOb$
  }

  getBeer(id: number): Observable<Beer>{
    const filter = this.array.filter(x => x.id === id);
       return from(filter);
  } 
}
