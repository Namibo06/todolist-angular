import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ConfigurationsComponent],
  exports: [ConfigurationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ConfigurationsModule { }
