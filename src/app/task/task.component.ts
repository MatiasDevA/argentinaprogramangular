import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Task } from '../task';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
tasks:Task[]=[];
faCoffe = faCoffee
faArchive = faArchive
  constructor(
    private taskService:ServiceService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (
    this.tasks = tasks
  ))}
 deleteTask(task:Task){
   this.taskService.deleteTask(task).subscribe(()=>(
    this.tasks = this.tasks.filter(t => t.id !== task.id))
   )}
   toggleReminder(task:Task){
     task.reminder = !task.reminder
     this.taskService.updateTaskReminder(task).subscribe();
   }
   addTask(task:Task){
     this.taskService.addTask(task).subscribe((task) =>(
       this.tasks.push(task)
     ))
   }
}
