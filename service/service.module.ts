import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { ServiceComponent } from './service.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from '../utility/utility.module';


const routes: Routes = [
  {path:'service',component:ServiceComponent, children:[
    {path:'service1',component:Service1Component},
    {path:'service2',component:Service2Component}
  ]},]

@NgModule({
  declarations: [Service1Component, Service2Component,ServiceComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  exports:[RouterModule,UtilityModule]
})
export class ServiceModule { }
