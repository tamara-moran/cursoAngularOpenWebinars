import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas: Entrada[];

  constructor() { 

    this.listadoEntradas = [

      {
        titulo:  'Introduccion a Angular',
        resumen: 'bla bla bla'
      },
      {
        titulo:  'Componentes de Angular',
        resumen: 'bla bla bla'
      },
      {
        titulo:  'Introduccion a TypeScript',
        resumen: 'bla bla bla'
      }

    ];

  }

  ngOnInit(): void {
  }

}
