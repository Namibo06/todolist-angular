import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{
  email:string|null="";
  password:string|null="";
  search:string="";
  searchIcon: IconDefinition=faSearch;

  constructor(){

  }

  ngOnInit(){
    this.verifyCredentials();
  }

  verifyCredentials(){
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
