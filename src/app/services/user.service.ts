import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message_status } from '../models/message_status';
import { token_login } from '../models/token_login';
import { user_id_verify_login } from '../models/user_id_verify_login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlCreateUser: string="https://api-restfull-todolist-springboot-production.up.railway.app/users";
  urlAuthUser: string="https://api-restfull-todolist-springboot-production.up.railway.app/users/login";
  urlFindUser:string="https://api-restfull-todolist-springboot-production.up.railway.app/users/findUser/";

  constructor(
    private http:HttpClient
  ) { }


  verifyTokenService(token:string|null):Observable<user_id_verify_login>{
    return this.http.get<user_id_verify_login>(this.urlFindUser+token);
  }

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
