import { Component} from '@angular/core';
import { CounterserviceService } from '../counterservice.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent{

  value$ = this.subject.getData();

  constructor(private subject: CounterserviceService) { }

  
}
