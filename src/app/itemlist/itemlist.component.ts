import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Tasks } from '../tasklist';
import { Task } from '../task';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
@Input() task: Task = Tasks[0]
@Output() onDeleteEvent:EventEmitter<Task> = new EventEmitter()
@Output() onToggleReminder:EventEmitter<Task> = new EventEmitter()
faCoffee = faCoffee
faArchive = faArchive
  constructor() { }

  ngOnInit(): void {
  }
onDelete(task:Task){
  this.onDeleteEvent.emit(task);
}
onToggle(task:Task){
  this.onToggleReminder.emit(task);
}
}
