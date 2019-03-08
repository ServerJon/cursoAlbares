import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/** Como se comentan en los apuntes, este archivo se utiliza para enlazar el modulo raíz con la aplicación en Angular */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
