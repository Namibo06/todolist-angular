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

        this.successCallback=true;
          this.messageSuccess=res.message;
          localStorage.setItem("email",this.email);
          localStorage.setItem("password",this.password);

          setTimeout(() => {
            this.successCallback=false;
            window.location.href="/index";
          }, 3000);
      },
      error:(err)=>{
        console.log(err);
        if(err.status===404){
          this.errorCallback=true;
          this.messageError="Usuário não encontrado";

          setTimeout(() => {
            this.errorCallback=false;
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
