import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterModule } from './pages/register/register.module';
import { LoginModule } from './pages/login/login.module';
import { IndexModule } from './pages/index/index.module';
import { CreateTaskModule } from './pages/create-task/create-task.module';
import { ErrorModule } from './pages/error/error.module';
import { TaskModule } from './pages/task/task.module';
import { PerfilModule } from './pages/perfil/perfil.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationsModule } from './shared/configurations/configurations.module';
import { HeaderModule } from './shared/header/header.module';
import { ConfigsModule } from './pages/configs/configs.module';



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
    ErrorModule,
    TaskModule,
    PerfilModule,
    ConfigurationsModule,
    HeaderModule,
    ConfigsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
