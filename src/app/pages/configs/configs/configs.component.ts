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
  username:string="";

  /*localstorage */
  user_id:string|null="";

  /*modal update user */
  newEmail:string="";
  newUsername:string="";
  modalUpdateUser:boolean=false;

  /*modal update password*/
  newPassword:string="";
  newConfirmPassword:string="";
  modalUpdatePassword:boolean=false;

  /*modal remove user*/
  modalRemoveUser:boolean=false;

  constructor(
    private service:UserService
  ){}

  ngOnInit(){
    this.getDataLocalStorage();
    this.getUser();
  }

  getDataLocalStorage(){
    this.user_id=localStorage.getItem("user_id");
  }

  getUser(){
    this.service.findUser(this.user_id).subscribe({
      next:(res)=>{
        //console.log(res);
        this.password=res.password;
        this.email=res.email;
        this.username=res.username;
        const username_format = res.username.charAt(0);
        this.username_first_letter=username_format;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  openModalUpdateUser(){
    this.modalUpdateUser=true;
  }

  closeModalUpdateUser(){
    this.modalUpdateUser=false;
  }

  updateUser() {
    this.service.updateUserById(this.user_id,this.username,this.email).subscribe({
      next:(res)=>{
        console.log(res);

        setTimeout(() => {
          window.location.href="/configuracoes";
        }, 2000);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  openModalUpdatePassword() {
    this.modalUpdatePassword=true;
  }

  closeModalUpdatePassword() {
    this.modalUpdatePassword=false;
  }

  updatePassword() {
    if(this.newPassword !== this.newConfirmPassword){
      console.log("Senhas não batem");
      return;
    }

    this.service.updatePasswordUserById(this.user_id,this.password).subscribe({
      next:(res)=>{
        console.log(res);

        setTimeout(() => {
          window.location.href="/configuracoes";
        }, 2000);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  openModalRemoveUser() {
    this.modalRemoveUser=true;
  }

  closeModalRemoveUser() {
    this.modalRemoveUser=false;
  }

  removeUser() {
    //throw new Error('Method not implemented.');
  }
}
