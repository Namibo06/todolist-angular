import { Component, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss','./configs.responsive.component.scss']
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
  usernameLength:number=0;
  emailLength:number=0;
  newPasswordLength:number=0;
  confirmNewPasswordLength:number=0;

  /*modal update password*/
  newPassword:string="";
  newConfirmPassword:string="";
  modalUpdatePassword:boolean=false;

  /*modal remove user*/
  modalRemoveUser:boolean=false;

  /*icons*/
  backPage:IconDefinition=faArrowLeft;

  constructor(
    private service:UserService,
    private renderer:Renderer2
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
        this.username_first_letter=username_format.toUpperCase();
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
    this.service.updateUserById(this.user_id,this.newUsername,this.newEmail).subscribe({
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

    this.service.updatePasswordUserById(this.user_id,this.newPassword).subscribe({
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
    this.service.removeUserService(this.user_id).subscribe({
      next:(res)=>{
        setTimeout(() => {
          window.location.href="/";
        }, 2000);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  verifySizeUsername(event:Event):void {
    let usernameLabel = document.getElementById("usernameLabel");
    const input = event.target as HTMLInputElement;
    this.usernameLength = input.value.length;

    if(this.usernameLength === 0){
      if(usernameLabel !== null){
        usernameLabel.style.position = "relative";
        usernameLabel.style.top = "25px";
      }
    }else if(this.usernameLength > 0){
      if(usernameLabel !== null){
        usernameLabel.style.position = "relative";
        usernameLabel.style.top = "0px";
      }
    }
  }

  verifySizeEmail(event:Event):void{
    let emailLabel = document.getElementById("emailLabel");
    const input = event.target as HTMLInputElement;
    this.emailLength = input.value.length;

    if(this.emailLength === 0){
      if(emailLabel !== null){
        emailLabel.style.position = "relative";
        emailLabel.style.top = "25px";
      }
    }else if(this.emailLength > 0){
      if(emailLabel !== null){
        emailLabel.style.position = "relative";
        emailLabel.style.top = "0px";
      }
    }
  }

  verifySizeNewPassword(event: Event):void {
    let newPasswordLabel = document.getElementById("newPasswordLabel");
    const input = event.target as HTMLInputElement;
    this.newPasswordLength = input.value.length;

    if(this.newPasswordLength === 0){
      if(newPasswordLabel !== null){
        newPasswordLabel.style.position = "relative";
        newPasswordLabel.style.top = "25px";
      }
    }else if(this.newPasswordLength > 0){
      if(newPasswordLabel !== null){
        newPasswordLabel.style.position = "relative";
        newPasswordLabel.style.top = "0px";
      }
    }
  }

  verifySizeConfirmNewPassword(event: Event) {
    let confirmNewPasswordLabel = document.getElementById("confirmNewPasswordLabel");
    const input = event.target as HTMLInputElement;
    this.confirmNewPasswordLength = input.value.length;

    if(this.confirmNewPasswordLength === 0){
      if(confirmNewPasswordLabel !== null){
        confirmNewPasswordLabel.style.position = "relative";
        confirmNewPasswordLabel.style.top = "25px";
      }
    }else if(this.confirmNewPasswordLength > 0){
      if(confirmNewPasswordLabel !== null){
        confirmNewPasswordLabel.style.position = "relative";
        confirmNewPasswordLabel.style.top = "0px";
      }
    }
  }
}
