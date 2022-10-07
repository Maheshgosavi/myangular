import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { devAPIUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FileService {
// url2:string='https://jsonplaceholder.typicode.com/todos'
// userurl:string='https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient:HttpClient) { }

getValue(){
 return this.httpClient.get(`${devAPIUrl}todos`)
}

getUser(){
  return this.httpClient.get(`${devAPIUrl}users`)
}

}
