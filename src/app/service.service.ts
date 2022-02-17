import { Injectable } from '@angular/core';
import { Tasks } from './tasklist'
import { Observable,of } from 'rxjs';
import { Task } from './task'
import{HttpClient,HttpHandler, HttpHeaders} from '@angular/common/http'

const httpOptions= {
  headers: new HttpHeaders({'Content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:4201/task'

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
   return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions)
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task, httpOptions);
  }
}
