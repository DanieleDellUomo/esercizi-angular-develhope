import { Component, OnInit } from '@angular/core';
import { CounterserviceService } from '../counterservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private counter: CounterserviceService) { }


  ngOnInit(): void {
  }

  submitValue(sub: any){
    this.counter.addCounter(sub.value);
  }
}
