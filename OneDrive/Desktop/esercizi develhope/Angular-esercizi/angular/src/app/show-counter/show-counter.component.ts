import { Component, OnInit } from '@angular/core';
import { CounterserviceService } from '../counterservice.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  counterValue = this.counter.getCounter();

  constructor(private counter: CounterserviceService) { }

  ngOnInit(): void {
  }
  
  updateCounter(){
    this.counterValue = this.counter.getCounter();
    return this.counterValue;
  } 
}
