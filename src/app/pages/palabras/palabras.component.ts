import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PalabrasService } from "../../services/palabras.service";

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  categoria_mame: string = "";
  palabras = [];

  constructor(private activateRoute: ActivatedRoute, private palabrasService: PalabrasService) { 
    /** De esta manera recuperaremos los parametros que se pasan con la ruta */
    activateRoute.params.subscribe( params => {
      this.categoria_mame = params['categoria'];
    });
  }

  ngOnInit() {
    this.loadWord();
  }

  loadWord(){
    this.palabrasService.getConfig().subscribe(
      respuestaCorrecta => {

        /** Este codigo se realiza para que Angular reconozca que los datos son en JSON. En un caso real, el 
         * servidor nos devuelve los datos con el un content-type: JSON por lo que ya sabe de que se trata. En este caso
         * debemos nosotros interpretar esos datos.
         * 
         * el código real sería tan solo: var _json = respuestaCorrecta.json() o si ya hemos hecho esta transformación en el service
         * ya podríamos trabajar con el json sin problema
         */

        var _json = JSON.stringify(respuestaCorrecta)

        var array_palabras = JSON.parse(_json).palabras; 

        if(this.categoria_mame != undefined){
          array_palabras.forEach(palabra => {
            if(palabra.categoria == this.categoria_mame){
              this.palabras.push(palabra);
            }
          });
        }else{
          this.palabras = JSON.parse(_json).palabras;
        }

      },
      err => {
        console.log("error: ",err);
        /**
         * La única diferencia con las versiones de Angular 6 o superior sería colocar aquí la llamada al handleError(err). El handlerError se trata 
         * de una función que crearemos donde capturaremos el error en el service.
         */
      }
    );

  }

}
