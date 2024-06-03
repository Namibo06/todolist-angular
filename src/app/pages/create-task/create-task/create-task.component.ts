import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent{
  id:string|null="";
  title:string="";
  description:string="";

  constructor() {}


}
