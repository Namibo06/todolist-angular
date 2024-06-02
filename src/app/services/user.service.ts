import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message_status } from '../models/message_status';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlCreateUser: string="http://localhost:8080/users";

  constructor(
    private http:HttpClient
  ) { }

  createUserService(username:string,email:string,password:string):Observable<message_status>{
    const body={
      "username":username,
      "email":email,
      "password":password
    };

    return this.http.post<message_status>(this.urlCreateUser,body);
  }
}
