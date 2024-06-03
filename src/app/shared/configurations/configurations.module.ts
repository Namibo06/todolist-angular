import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ConfigurationsComponent],
  exports:[ConfigurationsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class ConfigurationsModule { }
