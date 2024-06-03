import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigurationsModule } from '../../shared/configurations/configurations.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateTaskComponent],
  exports:[CreateTaskComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ConfigurationsModule,
    RouterModule,
    FormsModule
  ]
})
export class CreateTaskModule { }
