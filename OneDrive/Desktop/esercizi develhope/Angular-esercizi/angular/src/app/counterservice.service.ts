import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterserviceService {

  constructor() { }

  private counter = 0;

  getCounter(): number {
    return this.counter;
  }

  addCounter(value = 1) {
    this.counter += +value;
    console.log('added ', value,'= ', this.counter);
    if (this.counter < 0) {
      console.error('Error: Counter non può essere negativo');
      this.counter = 0;
    }
  }

}