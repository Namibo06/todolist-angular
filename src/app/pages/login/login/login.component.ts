import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faEye, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
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

  /**callback */
  errorCallback: boolean=false;
  messageError: string="";
  successCallback: boolean=false;
  messageSuccess: string="";

  constructor(){}

  autheticateUser() {
    throw new Error('Method not implemented.');
  }

  changeEyePassword() {
    throw new Error('Method not implemented.');
  }
}
