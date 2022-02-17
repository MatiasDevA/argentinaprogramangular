import { identifierName } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioUltimoService } from '../servicio-ultimo.service';
import { Task } from '../task';

@Component({
  selector: 'app-add-tasl',
  templateUrl: './add-tasl.component.html',
  styleUrls: ['./add-tasl.component.css']
})
export class AddTaslComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()
  id:any
  text:string="";
  date:any;
  day:string="";
  reminder:boolean=false;
  showAddTasl:boolean = false;
  subscription?: Subscription;

  constructor(private  servicioUltimoService:ServicioUltimoService ) { 
    this.subscription = this.servicioUltimoService.onToogle().subscribe(value => this.showAddTasl = value)
  }

  ngOnInit(): void {
  }
 onSubmit(){
   if(this.text.length === 0){
     alert("put a text");
     return
   }
   const{id,text,date,day,reminder} = this
   const newTask = {id,text,date,day,reminder} 
   this.onAddTask.emit(newTask);
 }
}
