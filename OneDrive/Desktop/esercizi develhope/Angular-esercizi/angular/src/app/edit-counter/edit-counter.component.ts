import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounterserviceService } from '../counterservice.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {


  constructor( private subject : CounterserviceService ) {}

  ngOnInit(): void {
  }

  submit(form:NgForm){
    this.subject.setData(form.value.input);
  }

}
