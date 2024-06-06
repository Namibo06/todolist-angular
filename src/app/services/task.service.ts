import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message_status } from '../models/message_status';
import { create_task } from '../models/create_task';
import { findAll } from '../models/findAll';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  urlCreateTask:string="http://localhost:8080/tasks";
  urlTaskFindById:string="http://localhost:8080/tasks/";
  urlTaskFindAll:string="http://localhost:8080/tasks/findAll/";

  constructor(
    private http:HttpClient
  ) { }

  createTaskService(title:string,description:string,user_id:string|null):Observable<create_task>{
    const body={
      "title": title,
      "description": description,
      "user_id": {
        "id":user_id
      }
    };

    return this.http.post<create_task>(this.urlCreateTask,body);
  }

  findTaskByIdService(task_id:string):Observable<create_task>{
    return this.http.get<create_task>(this.urlTaskFindById+task_id);
  }

  findAllTaskService(user_id:string|null):Observable<findAll>{
    return this.http.get<findAll>(this.urlTaskFindAll+user_id);
  }

  updateTask(task_id:string,title:string,description:string):Observable<create_task>{
    const body={
      "title": title,
      "description": description,
    };

    return this.http.put<create_task>(this.urlTaskFindById+task_id,body);
  }
}
