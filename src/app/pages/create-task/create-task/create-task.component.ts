import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent{
  /**data */
  user_id:string|null="";
  title:string="";
  description:string="";

  /**icons */
  back_page:IconDefinition=faArrowLeft;

  constructor(
    private service:TaskService,
  ) {
      this.getLocalData();
  }

  getLocalData(){
    this.user_id=localStorage.getItem("user_id");
  }

  createTask(){
    this.service.createTaskService(this.title,this.description,this.user_id).subscribe({
      next:(res)=>{
        console.log(res);
        const task_id=res.id;

        setTimeout(() => {
          window.location.href=`/task/${task_id}`;
        }, 2000);
      },
      error:(err)=>{
        console.error(err);
      }
    });
  }
}
