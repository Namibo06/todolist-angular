import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { IndexComponent } from './pages/index/index/index.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"iniciar-sessao",
    component:LoginComponent
  },
  {
    path:"cadastro",
    component:RegisterComponent
  },
  {
    path:"index",
    component:IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
