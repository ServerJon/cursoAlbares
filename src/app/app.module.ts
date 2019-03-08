/** Modulo principal
 * 
 *    Aquí cargaremos los modulos de Angular que necesitemos para trabajar en el proyecto.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** Cargaremos  todos los componentes, servicios y otros archivos que necesitemos de nuestro proyecto */
import { AppComponent } from './app.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriasService } from './services/categorias.service';
import { PalabrasComponent } from './pages/palabras/palabras.component';
import { AppRoutingModule } from './/app-routing.module';
import { PalabrasService } from "./services/palabras.service";

@NgModule({
  /** Aqui declaramos los componentes que vayamos a utilizar */
  declarations: [
    AppComponent,
    CategoriasComponent,
    PalabrasComponent
  ],
  /** Importamos los modulos de Angular necesarios */
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  /** Cargamos todos los servicios que vayamos a utilizar */
  providers: [CategoriasService, PalabrasService],
  /** Este metadato apenas se modifica */
  bootstrap: [AppComponent]
})
export class AppModule { }
