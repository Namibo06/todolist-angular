import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEllipsis, faEllipsisVertical, faGear, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../../services/task.service';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{
  /**data */
  user_id:string|null="";
  email:string|null="";
  password:string|null="";
  search:string="";
  title:string="";
  tasks:any=[];

  /**icons */
  searchIcon: IconDefinition=faSearch;
  actionsIcon:IconDefinition=faEllipsisVertical;
  enginnerIcon:IconDefinition=faGear;
  deleteTaskIcon:IconDefinition=faTrash;

  /**modal delete */
  modal_delete:boolean=false;
  sub_modal_delete:boolean=false;
  btn_delete_task:boolean=true;

  constructor(
    private service:TaskService
  ){}

  ngOnInit(){
    this.verifyCredentials();
    this.findAllTask();
  }

  deleteTask(task_id:number){
    this.service.deleteTask(task_id).subscribe({
      next:(res)=>{
        console.log(res);
        this.btn_delete_task=true;
        window.location.href="/index";
      },
      error:(err)=>{
        console.error(err);
      }
    });
  }

  cancelSubModalDelete(taskId:number){
    this.sub_modal_delete=false;
    this.tasks = this.tasks.map((task: any) => {
      task.showDeleteModal = false;
      return task;
    });
    this.btn_delete_task=true;
  }

  openSubModalDelete(){
    this.sub_modal_delete=true;
    this.btn_delete_task=false;
  }

  openModalDelete(taskId: number) {
    this.tasks = this.tasks.map((task: any) => {
      if (task.id === taskId) {
        task.showDeleteModal = !task.showDeleteModal;
      } else {
        task.showDeleteModal = false; // opcional: fechar outros modais
      }
      return task;
    });
  }

  findAllTask() {
    this.service.findAllTaskService(this.user_id).subscribe({
      next: (res) => {
        this.tasks = res.map((task: any) => {
          task.showDeleteModal = false;
          return task;
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  verifyCredentials(){
    this.user_id=localStorage.getItem("user_id");
    this.email=localStorage.getItem("email");
    this.password=localStorage.getItem("password");

    if(this.email == "" || this.password == ""){
      window.location.href="/iniciar-sessao";
    }
  }

  findTasksBySearch(search:string) {
    console.log(search);
  }
}
