import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

  @Output() submitValue = new EventEmitter<NgForm>(); 

  constructor() { }

  ngOnInit(): void {
  }

  submit(form:NgForm){
    this.submitValue.emit(form.value);
  }

}
