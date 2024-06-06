import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [TaskComponent],
  exports:[TaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class TaskModule { }
