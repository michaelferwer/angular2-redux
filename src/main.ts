import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent, APP_PROVIDERS } from './app';
import { PLATFORM_PROVIDERS } from './platform/browser';

if(process.env.ENV === 'dev'){
  // TODO HMR to set, wait more stable version
} else if (process.env.ENV === 'production') {
  enableProdMode();
}


bootstrap(AppComponent, [
  // To add more vendor providers please look in the platform/ folder
  ...PLATFORM_PROVIDERS,
  ...APP_PROVIDERS,
])
.catch(err => console.error(err));
