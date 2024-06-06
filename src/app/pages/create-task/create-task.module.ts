import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [CreateTaskComponent],
  exports:[CreateTaskComponent],
  imports:[
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class CreateTaskModule { }
