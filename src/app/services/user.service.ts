import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message_status } from '../models/message_status';
import { token_login } from '../models/token_login';
import { user_id_verify_login } from '../models/user_id_verify_login';
import { findUserById } from '../models/findByUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlCreateUser: string="https://api-restfull-todolist-springboot-production.up.railway.app/users";
  urlAuthUser: string="https://api-restfull-todolist-springboot-production.up.railway.app/users/login";
  urlFindUserByToken:string="https://api-restfull-todolist-springboot-production.up.railway.app/users/findUser/";
  urlFindUserById:string="https://api-restfull-todolist-springboot-production.up.railway.app/users/";
  urlUpdateUserById:string="https://api-restfull-todolist-springboot-production.up.railway.app/users/updateUser/";
  urlUpdatePasswordUserById:string="https://api-restfull-todolist-springboot-production.up.railway.app/users/updatePassword/";

  constructor(
    private http:HttpClient
  ) { }

  findUser(user_id:string|null):Observable<findUserById>{
    return this.http.get<findUserById>(this.urlFindUserById+user_id);
  }

  verifyTokenService(token:string|null):Observable<user_id_verify_login>{
    return this.http.get<user_id_verify_login>(this.urlFindUserByToken+token);
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

  updateUserById(user_id:string|null,username:string,email:string):Observable<message_status>{
    const body={
      "username":username,
      "email":email
    };

    return this.http.put<message_status>(this.urlUpdateUserById+user_id,body);
  }

  updatePasswordUserById(user_id:string|null,password:string):Observable<message_status>{
    const body={
      "password":password
    };

    return this.http.put<message_status>(this.urlUpdatePasswordUserById+user_id,body);
  }

  removeUserService(user_id:string|null){
    return this.http.delete(this.urlCreateUser+"/"+user_id);
  }
}
