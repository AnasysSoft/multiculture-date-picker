import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*(function() {
  var call = Function.prototype.call;
  Function.prototype.call = function() {
    console.log(this, arguments);
    return call.apply(this, arguments);
  };
}());*/


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
