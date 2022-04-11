import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  /*Como ahora hacemos una llamada a un servidor ya no podemos inicializar
  nosotros las entradas por tanto tenemos que cambiar el tipo a any ya que no sabemos que recibiremos
  y eliminar los datos manuales que hicimos anteriormente, los dejo comentados
  public listadoEntradas: Entrada[];*/

  public listadoEntradas: any;

  constructor(private entradaService: EntradaService) { 

    
    /*this.listadoEntradas = [

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

    ];*/

  }

  private recuperarEntradas(): void{

    //Llamamos al servicio y nos "suscribimos" a la espera de que nos envíe la información
    
    this.entradaService.recuperarEntradas().subscribe(

      //Dentro tenemos dos funciones, si nos envía la información correctamente

      (data) =>{
        this.listadoEntradas = data;

      },

      //Si se presenta algún error
      (error) =>{

      },
      
      //Y cuando finaliza la petición
      ()=>{

      }
    )
  }

  ngOnInit(): void {

    this.recuperarEntradas();     

  }

  public mostrarTitulo (titulo:string):void {
    alert(`Entrada seleccionada: ${titulo}.`); 
   }

}
