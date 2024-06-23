import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message_status } from '../models/message_status';
import { token_login } from '../models/token_login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlCreateUser: string="https://api-restfull-todolist-springboot-production.up.railway.app/users";
  urlAuthUser: string="https://api-restfull-todolist-springboot-production.up.railway.app/users/login";

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

  authUserService(email:string,password:string):Observable<token_login>{
    const body={
      "email":email,
      "password":password
    };

    return this.http.post<token_login>(this.urlAuthUser,body);
  }
}
