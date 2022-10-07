import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomponent',
  templateUrl: './servicecomponent.component.html',
  styleUrls: ['./servicecomponent.component.css']
})
export class ServicecomponentComponent implements OnInit {
products={}
  constructor(private demo:DemoService) { }

  ngOnInit():void {
    
    this.demo.getUser().subscribe((data =>{
      this.products=data;
    }))

  }

}
