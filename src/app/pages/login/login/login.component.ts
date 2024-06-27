import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./login.responsive.component.scss']
})
export class LoginComponent {
  /**data */
  id:number=0;
  user_id:number=0;
  username:string="";
  email: string="";
  password: string="";
  typePassword: boolean=false;

  /**icons */
  emailIcon: IconDefinition=faEnvelope;
  passwordIcon: IconDefinition=faLock;
  layoutEyePasswordIcon: IconDefinition=faEye;
  eyeIcon:IconDefinition=faEye;
  eyeSlashIcon:IconDefinition=faEyeSlash;

  /**callback */
  errorCallback: boolean=false;
  messageError: string="";
  successCallback: boolean=false;
  messageSuccess: string="";

  constructor(
    private service:UserService
  ){}

  autheticateUser() {
    this.service.authUserService(this.email,this.password).subscribe({
      next:(res)=>{
        console.log(res);
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");

        this.successCallback=true;
        this.messageSuccess="Usuário Autenticado";
        localStorage.setItem("token",res.token);
        localStorage.setItem("user_id",this.user_id.toString());

        setTimeout(() => {
          this.successCallback=false;
          window.location.href="/index";
        }, 3000);
      },
      error:(err)=>{
        console.log(err);
        if(err.status===403){
          this.errorCallback=true;
          this.messageError="Usuário não autorizado";

          setTimeout(() => {
            this.errorCallback=false;
            this.email="";
            this.password="";
          }, 5000);
        }

        if(err.status===404){
          this.errorCallback=true;
          this.messageError="Usuário não encontrado";

          setTimeout(() => {
            this.errorCallback=false;
            this.email="";
            this.password="";
          }, 5000);
        }
      }
    });
  }

  changeEyePassword() {
    this.typePassword = !this.typePassword;

    if(this.layoutEyePasswordIcon===this.eyeIcon){
      this.layoutEyePasswordIcon=this.eyeSlashIcon;
    }else{
      this.layoutEyePasswordIcon=this.eyeIcon;
    }
  }
}
