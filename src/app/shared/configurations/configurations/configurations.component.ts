import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAdd, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.scss'
})
export class ConfigurationsComponent {
  options:boolean=false;

  /**icons */
  addIcon:IconDefinition=faAdd;
  closeIcon:IconDefinition=faXmark;
  changeOptionsLayout:IconDefinition=this.addIcon;


  viewOptions(){
    if(this.changeOptionsLayout===this.addIcon){
      this.changeOptionsLayout=this.closeIcon;
      this.options=true;
    }else{
      this.changeOptionsLayout=this.addIcon;
      this.options=false;
    }
  }
}
