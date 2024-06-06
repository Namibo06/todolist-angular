import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [LoginComponent],
  exports:[LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class LoginModule { }
