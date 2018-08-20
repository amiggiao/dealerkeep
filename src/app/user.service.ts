import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import {User } from './models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';
  constructor(private _http: HttpClient) {
    
   }

   //TODO: mapping of derived prop values here
   getUsers(): Observable<any> {
    return this._http.get(`${this.url}/users`);

   }
}
