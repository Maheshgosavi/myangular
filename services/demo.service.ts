import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
url:any='https://jsonplaceholder.typicode.com/todos'
  constructor(private httpClient:HttpClient) { 

  }

getUser(): Observable<any>{
  return this.httpClient.get(this.url)
}


emp1:any=['mahesh',100,'manager'];
emp2:any=['ganesh',101,'HR'];
emp3:any=['suresh',102,'supervisor']

getInfo1(){
  return this.emp1
};

getInfo2(){
  return this.emp2
};

getInfo3(){
  return this.emp3
}
}
