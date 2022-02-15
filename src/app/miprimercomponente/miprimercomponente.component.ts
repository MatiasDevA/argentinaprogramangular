import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
  styleUrls: ['./miprimercomponente.component.css']
})
export class MiprimercomponenteComponent implements OnInit {
  title:string = "Task list"

  constructor() { }

  ngOnInit(): void {
  }

}
