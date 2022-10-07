import { Component, OnInit } from '@angular/core';
import { FileService } from '../service2/file.service';

@Component({
  selector: 'app-servicecomponent2',
  templateUrl: './servicecomponent2.component.html',
  styleUrls: ['./servicecomponent2.component.css']
})
export class Servicecomponent2Component implements OnInit {
employee:any=[]
user:any=[]
  constructor(private file:FileService) { }

  ngOnInit() {
    this.file.getValue().subscribe((data =>{
      this.employee=data
    })),

    this.file.getUser().subscribe((value =>{
      this.user=value
    }))
  }

}
