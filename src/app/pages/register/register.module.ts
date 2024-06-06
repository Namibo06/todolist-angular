import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RegisterComponent],
  exports:[RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class RegisterModule { }
