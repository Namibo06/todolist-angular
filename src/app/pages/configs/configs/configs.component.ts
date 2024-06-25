import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrl: './configs.component.scss'
})
export class ConfigsComponent implements OnInit{
  /*data */
  email:string="";
  password:string="";
  username_first_letter:string="";

  /*localstorage */
  username:string|null="";
  user_id:string|null="";

  constructor(
    private service:UserService
  ){}

  ngOnInit(){
    this.getDataLocalStorage();
    this.getUser();
  }

  getDataLocalStorage(){
    this.username=localStorage.getItem("username");
    this.user_id=localStorage.getItem("user_id");
  }

  getUser(){
    this.service.findUser(this.user_id).subscribe({
      next:(res)=>{
        console.log(res);
        this.password=res.password;
        this.email=res.email;
        const username_format = res.username.charAt(0);
        this.username_first_letter=username_format;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
