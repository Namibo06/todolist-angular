import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterModule } from './pages/register/register.module';
import { LoginModule } from './pages/login/login.module';
import { IndexModule } from './pages/index/index.module';
import { CreateTaskModule } from './pages/create-task/create-task.module';
import { UpdateTaskModule } from './pages/update-task/update-task.module';
import { ErrorModule } from './pages/error/error.module';
import { TaskModule } from './pages/task/task.module';
import { PerfilModule } from './pages/perfil/perfil.module';
import { UpdateUserModule } from './pages/update-user/update-user.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationsModule } from './shared/configurations/configurations.module';
import { HeaderComponent } from './shared/header/header/header.component';
import { HeaderModule } from './shared/header/header.module';
import { ConfigsComponent } from './pages/configs/configs/configs.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RegisterModule,
    LoginModule,
    IndexModule,
    CreateTaskModule,
    UpdateTaskModule,
    ErrorModule,
    TaskModule,
    PerfilModule,
    UpdateUserModule,
    ConfigurationsModule,
    HeaderModule,
    ConfigurationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
