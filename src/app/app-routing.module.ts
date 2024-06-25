import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { IndexComponent } from './pages/index/index/index.component';
import { CreateTaskComponent } from './pages/create-task/create-task/create-task.component';
import { TaskComponent } from './pages/task/task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfigsComponent } from './pages/configs/configs/configs.component';

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
  },
  {
    path:"criar-tarefa",
    component:CreateTaskComponent
  },
  {
    path:"task/:id",
    component:TaskComponent
  },
  {
    path:'configuracoes',
    component:ConfigsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
