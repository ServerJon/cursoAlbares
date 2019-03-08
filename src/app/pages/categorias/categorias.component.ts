import { Component, OnInit } from '@angular/core';

import { CategoriasService} from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias = {
  };

  constructor(private catService: CategoriasService) { }

  ngOnInit() {
    this.load_categorias();
  }

  load_categorias(){
    this.catService.getConfig().subscribe(
      respuestaCorrecta => {
        
        var _json = JSON.stringify(respuestaCorrecta)

        this.categorias = JSON.parse(_json).categorias; 

      },
      err => {
        console.log("error: ",err);
      }
    );
  }

}
