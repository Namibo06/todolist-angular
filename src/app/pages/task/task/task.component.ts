import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss','./task.component.responsive.scss']
})
export class TaskComponent implements OnInit{
  /**data */
  user_id:string|null="";
  task_id:string="";
  title:string="";
  description:string="";

  /**icons */
  back_page:IconDefinition=faArrowLeft;

  constructor(
    private service:TaskService,
    private route:ActivatedRoute
  ) {
      this.getLocalData();
  }

  ngOnInit(){
    this.task_id=this.route.snapshot.params["id"];
    this.findTaskById();
  }

  getLocalData(){
    this.user_id=localStorage.getItem("user_id");
  }

  findTaskById(){
    this.service.findTaskByIdService(this.task_id).subscribe({
      next:(res) =>{
        console.log(res);
        this.title=res.title;
        this.description=res.description;
        this.user_id=res.user_id.id.toString();
      },
      error:(err) =>{
        console.error(err);
      },
    });
  }

  updateTask(){
    this.service.updateTask(this.task_id,this.title,this.description).subscribe({
      next:(res)=>{
        console.log(res);
        const task_id_update=res.id;

        window.location.href=`task/${task_id_update}`;
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }
}
