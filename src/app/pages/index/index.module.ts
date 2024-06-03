import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ConfigurationsModule } from '../../shared/configurations/configurations.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [IndexComponent],
  exports:[IndexComponent],
  imports: [
    CommonModule,
    ConfigurationsModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class IndexModule { }
