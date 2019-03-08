/**
 * Importamos todos los modulos que necesitemos de angular o cualquier plugin que instalemos
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Sin esta etiqueta de metadatos angular no sabe que esta clase se trata de un servicio.
 */
@Injectable()
export class PalabrasService {

  /**
   * Las clases que importamos de algún modulo de angular o plugin deben inicializarse de esta manera, así es como angular 
   * entiende que se trata de una variable de una clase.
   * @param httpClient modulo de peticiones http
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Las variables internas que se usan dentro de la clase, ya sean servicios o componentes, se colocan de forma habitual.
   */
  private configUrl = 'assets/datos.json';

  /**
   * Petición a un archivo de json
   */
  getConfig() {
    return this.httpClient.get(this.configUrl);
  }

  /**
   * Ejemplo de una petición con una versión de Angular < 6.0
   * 
   * return this.http.post('Url donde queremos hacer la peticion', 'body de la petición por ser post convertir a JSON',
          { headers: headers})
          .map((response: Response) => {
              return response.json();
          })
          .catch(this.handlerError);
        }

      handlerError(error: Response){
        return Observable.throw(error.json().error || 'Server Error');
      }

      Los objetos .map, .catch y Observable son clases de rxjs y los debemos importar.
      Con esto recuperamos los datos del servidor, luego debemos tratarlos en el componente correspondiente
   */

  /**
   * Ejemplo petición con versión Angular > 6.0
   * 
   * return this.http.get('Url donde queremos hacer la petición', { headers: headers });
   * 
   *  handleErrors(error: Response) {
        return throwError(error);
      }
   */

  /**
   * Para ambos, la construcción de los headers sería la misma.
   * 
   * let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization',"Bearer "+token); <-- Esta segunda para las peticiones que nos exijan autentificación
   */

}
