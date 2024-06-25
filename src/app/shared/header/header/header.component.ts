import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../../services/task.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.component.responsive.scss']
})
export class HeaderComponent implements OnInit{
  /**data */
  user_id:string|null="";
  email:string|null="";
  password:string|null="";
  token:string|null="";
  search:string="";
  title:string="";
  tasks:any=[];

  /**icons */
  searchIcon: IconDefinition=faSearch;
  enginnerIcon:IconDefinition=faGear;

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
    this.token = localStorage.getItem("token");

    if(this.token === ""){
      window.location.href="/iniciar-sessao";
    }
  }

  findTasksSearch(search:string) {
    this.service.findTaskSearchService(search,this.user_id).subscribe({
      next: (res) => {
        console.log("aqui");
        console.log(res);
        this.tasks=res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
