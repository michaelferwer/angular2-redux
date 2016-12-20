import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppModule} from "./app";

if (process.env.ENV === 'dev') {
    // TODO HMR to set, wait more stable version
} else if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));