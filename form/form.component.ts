import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
position=[ "HR","Manager","Supervisor","Q&C","Labour"]
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form);
    
  }
}
