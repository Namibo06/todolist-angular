import { Component, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrl: './configs.component.scss'
})
export class ConfigsComponent implements OnInit{

  /*data */
  email:string="";
  password:string="";
  username_first_letter:string="";
  username:string="";

  /*localstorage */
  user_id:string|null="";

  /*modal update user */
  newEmail:string="";
  newUsername:string="";
  modalUpdateUser:boolean=false;

  /*modal update password*/
  newPassword:string="";
  newConfirmPassword:string="";
  modalUpdatePassword:boolean=false;

  /*modal remove user*/
  modalRemoveUser:boolean=false;

  /*icons*/
  backPage:IconDefinition=faArrowLeft;

  constructor(
    private service:UserService,
    private renderer:Renderer2
  ){}

  ngOnInit(){
    this.getDataLocalStorage();
    this.getUser();
  }

  getDataLocalStorage(){
    this.user_id=localStorage.getItem("user_id");
  }

  getUser(){
    this.service.findUser(this.user_id).subscribe({
      next:(res)=>{
        //console.log(res);
        this.password=res.password;
        this.email=res.email;
        this.username=res.username;
        const username_format = res.username.charAt(0);
        this.username_first_letter=username_format;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  openModalUpdateUser(){
    this.modalUpdateUser=true;
  }

  closeModalUpdateUser(){
    this.modalUpdateUser=false;
  }

  updateUser() {
    this.service.updateUserById(this.user_id,this.username,this.email).subscribe({
      next:(res)=>{
        console.log(res);

        setTimeout(() => {
          window.location.href="/configuracoes";
        }, 2000);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  openModalUpdatePassword() {
    this.modalUpdatePassword=true;
  }

  closeModalUpdatePassword() {
    this.modalUpdatePassword=false;
  }

  updatePassword() {
    if(this.newPassword !== this.newConfirmPassword){
      console.log("Senhas não batem");
      return;
    }

    this.service.updatePasswordUserById(this.user_id,this.password).subscribe({
      next:(res)=>{
        console.log(res);

        setTimeout(() => {
          window.location.href="/configuracoes";
        }, 2000);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  openModalRemoveUser() {
    this.modalRemoveUser=true;
  }

  closeModalRemoveUser() {
    this.modalRemoveUser=false;
  }

  removeUser() {
    //throw new Error('Method not implemented.');
  }

  verifySizeUsername() {
    let usernameLabel = document.getElementById("usernameLabel");
    let usernameText = document.getElementById("usernameText");

    // Verifica se usernameText existe e obtém seu conteúdo de texto
    if(usernameText?.textContent !== null){
      let texto = usernameText ? usernameText.textContent.trim() : "";
      let quantidadePalavras = texto.split(/\s+/).filter(word => word.length > 0).length;

      if (quantidadePalavras !== undefined) {
        if (usernameLabel !== null && usernameText !== null) {
          // Caso geral quando há ou não palavras digitadas
          usernameLabel.style.position = "relative";
          usernameLabel.style.top = quantidadePalavras === 0 ? "0px" : "25px";
          console.log(quantidadePalavras);
          usernameText.style.backgroundColor = quantidadePalavras === 0 ? "#0000ff" : "#00ff00";
        } else {
          // Caso em que usernameLabel ou usernameText é null
          console.log("Aqui");
          // Remove a classe "abaixar" se usernameLabel não for null
          if (usernameLabel) {
            this.renderer.removeClass(usernameLabel, "abaixar");
          }
        }
      } else {
        console.log("quantidadePalavras é undefined");
      }

      console.log(quantidadePalavras);
      console.log(usernameLabel);
    }
  }

  verifySizeEmail(){

  }
}
