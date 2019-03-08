/**
 * Toda la información relacionada explicando un servicio se puede encontrar en el servicio de palabras.service.ts
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriasService {

  constructor(private httpClient: HttpClient) { }

  private configUrl = 'assets/datos.json';

  getConfig() {
    return this.httpClient.get(this.configUrl);
  }

}
