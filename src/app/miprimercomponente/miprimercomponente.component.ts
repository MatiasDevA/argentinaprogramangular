import { Component, OnInit } from '@angular/core';
import { ServicioUltimoService } from '../servicio-ultimo.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
  styleUrls: ['./miprimercomponente.component.css']
})
export class MiprimercomponenteComponent implements OnInit {
  title:string = "Task list";
  showAddTasl:boolean = false;
  subscription?: Subscription;

  constructor(private  servicioUltimoService:ServicioUltimoService, private router:Router) { 
    this.subscription = this.servicioUltimoService.onToogle().subscribe(value => this.showAddTasl = value)
  }

  ngOnInit(): void {
  }
  toogleAddTask(){
    this.servicioUltimoService.toogleAddTask();
  }
  hasRoute(route:string){
    return this.router.url === route
  }
}
