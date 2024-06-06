import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



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
