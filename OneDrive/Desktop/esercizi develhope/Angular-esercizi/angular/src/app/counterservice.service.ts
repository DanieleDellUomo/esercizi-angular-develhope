import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterserviceService {

  private subject = new BehaviorSubject<number>(0);

  constructor() {}
  
  getData(): Observable<number>{
    return this.subject;
  }
  
  setData(dataValue: number) {
    const totValue = this.subject.value + dataValue;
    if(totValue > 0){
    this.subject.next(totValue);}
    else {
    this.subject.next(0);
    console.error("Error: il valore da aggiungere non può essere negativo");
    }
  }

  
}