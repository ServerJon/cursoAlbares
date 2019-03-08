import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Cargaremos cada componente que queramos enrutar */
import { CategoriasComponent } from "./pages/categorias/categorias.component"
import {PalabrasComponent } from "./pages/palabras/palabras.component";

/** Este objeto crea las rutas necesarias para poder navegar por los diferentes componentes */
const routes: Routes = [
  /** 
   * path: nombre de la ruta que queramos crear
   * component: componente que queramos que se cargue 
   */
  {path: 'categorias', component: CategoriasComponent},
  {path: 'palabras', component: PalabrasComponent},
  /** Cuando queramos pasar un parametro a través de la url debemos declarar el parametro de la siguiente manera
   * un ejemplo seria: palabra/musica => pues el valor de la variable será 'musica'
   */
  {path: 'palabras/:categoria', component: PalabrasComponent},
  /** Ruta por defecto: es decir, ruta a la que se accede la primera vez que entramos en la web */
  {path: "", redirectTo: "/categorias", pathMatch: "full"},
  /** Ruta a la que se accede si no encuentra a la ruta que queremos navegar */
  {path: "**", component: CategoriasComponent}
];

@NgModule({
exports: [ RouterModule ],
imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

/**
 * Ejemplo de subrutas. 
 * 
 * { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuardService],
      children: [
        {path: '', redirectTo: 'cuestionarios', pathMatch: 'full'},
        { path: 'cuestionarios', component: CuestionariosComponent},
        { path: 'estadisticas', component: EstadisticasComponent},
        { path: 'preguntas/:id', component: PreguntasComponent}
      ]
    }

       Recordad que si colocamos esta manera de enrutar las diferentes vistas, angular va a buscar otra etiqueta <router-outlet> dentro del html
    del dashboard para cargar las vistas de cuestionarios y demás.
 */
