import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
   //   this.getTasks();
   }
   get(){
   // our http response is an Observable, store it in a variable
      return this._http.get('/api');
   // subscribe to the Observable and provide the code we would like to do with our data from the response
      
   }
  }