import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','./register.responsive.component.scss']
})
export class RegisterComponent {
  /**data */
  username: string="";
  email: string="";
  password: string="";

  /**callback */
  confirmPassword: string="";
  errorCallback: boolean=false;
  messageError: string="";
  successCallback: boolean=false;
  messageSuccess: string="";

  /**icons */
  userIcon:IconDefinition=faUserAlt;
  emailIcon:IconDefinition=faEnvelope;
  passwordIcon:IconDefinition=faLock;
  eyeIcon:IconDefinition=faEye;
  eyeSlashIcon:IconDefinition=faEyeSlash;

  /**show/hide password */
  layoutEyePasswordIcon:IconDefinition=this.eyeIcon;
  layoutEyeConfirmPasswordIcon:IconDefinition=faEye;
  typePassword:boolean=false;
  typeConfirmPassword:boolean=false;

  constructor(
    private service:UserService
  ){}

  changeEyePassword(){
    this.typePassword = !this.typePassword;

    if(this.layoutEyePasswordIcon===this.eyeIcon){
      this.layoutEyePasswordIcon=this.eyeSlashIcon;
    }else{
      this.layoutEyePasswordIcon=this.eyeIcon;
    }
  }

  changeTypeEyeConfirmPassword(){
    this.typeConfirmPassword = !this.typeConfirmPassword;

    if(this.layoutEyeConfirmPasswordIcon===this.eyeIcon){
      this.layoutEyeConfirmPasswordIcon=this.eyeSlashIcon;
    }else{
      this.layoutEyeConfirmPasswordIcon=this.eyeIcon;
    }
  }

  createUser() {
    if (this.username === "" || this.email === "" || this.password === "" || this.confirmPassword === "") {
      this.messageError="Preencha todos dados";
      this.errorCallback=true;

      setTimeout(() => {
        this.errorCallback=false;
      }, 5000);
    }else if(this.password.length <= 7){
      this.messageError="Senha deve conter de 8 a 100 caracteres";
      this.errorCallback=true;

      setTimeout(() => {
        this.errorCallback=false;
      }, 5000);
    }else if(this.password !== this.confirmPassword){
      this.messageError="Senha não são iguais";
      this.errorCallback=true;

      setTimeout(() => {
        this.errorCallback=false;
      }, 5000);
    }else{
      this.service.createUserService(this.username,this.email,this.password).subscribe({
        next:(res)=>{
          console.log(res);

          this.messageSuccess="Usuário criado";
            this.successCallback=true;

            setTimeout(() => {
              this.successCallback=false;
              window.location.href="/iniciar-sessao";
            }, 5000);
        },
        error:(err)=>{
          console.error(err);

          if(err.status === 409){
            this.messageError="Usuário já existe";
            this.errorCallback=true;

            setTimeout(() => {
              this.errorCallback=false;
              this.email="";
              this.username="";
              this.password="";
              this.confirmPassword="";
            }, 5000);
          }
        }
      });
    }
  }
}
