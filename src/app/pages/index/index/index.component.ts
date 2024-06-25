import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisVertical, faGear, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../../services/task.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss','./index.component.responsive.scss']
})
export class IndexComponent implements OnInit{
  /**data */
  user_id:string|null="";
  email:string|null="";
  password:string|null="";
  token:string|null="";
  search:string="";
  title:string="";
  tasksByElementSon:any=[];

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
    private service:TaskService,
    private userService:UserService
  ){}

  ngOnInit(){
    this.verifyCredentials();
    this.verifyUser();
    this.findAllTask();
  }

  verifyUser() {
    this.userService.verifyTokenService(this.token).subscribe({
      next:(res)=>{
        this.user_id=res.id.toString();
        localStorage.setItem("user_id",this.user_id);
      },
      error:(err)=>{
        console.log(err);
      }
    })
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
    this.tasksByElementSon = this.tasksByElementSon.map((task: any) => {
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
    this.tasksByElementSon = this.tasksByElementSon.map((task: any) => {
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
        this.tasksByElementSon = res.map((task: any) => {
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
    this.token = localStorage.getItem("token");

    if(this.token === ""){
      window.location.href="/iniciar-sessao";
    }
  }

  searchTaskByElementSon(e:any){
    this.tasksByElementSon = e;
  }
}
