import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEllipsis, faEllipsisVertical, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../../services/task.service';

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

  constructor(
    private service:TaskService
  ){}

  ngOnInit(){
    this.verifyCredentials();
    this.findAllTask();
  }

  onAnchorClick(event: Event) {
    event.preventDefault(); // Evita o comportamento padrão de redirecionamento do link
  }

  onButtonClick(event: Event) {
    event.stopPropagation(); // Impede a propagação do evento de clique para o elemento pai (a âncora)
    // Coloque aqui o código que deseja executar quando o botão é clicado
  }

  findAllTask(){
    this.service.findAllTaskService(this.user_id).subscribe({
      next:(res)=>{
        console.log(res);
        this.tasks=res;

      },
      error:(err)=>{
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
