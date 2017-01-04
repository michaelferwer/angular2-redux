import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
// material
/*import { MaterialModule } from '@angular/material';
MaterialModule.forRoot()*/
import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js';
// Pages
import {AppComponent} from "./app.component";
import {Home} from "./home";
// Components
import {Menu} from "./component/menu";
import {Navbar} from "./component/navbar";
// Routing
import {AppRoutingModule} from "./app.routes";

import {createStore} from 'redux';

import rootReducer from './reducer';
import * as actions from './actions';

const appStore = createStore(rootReducer);

const APP_PROVIDERS = [
    {provide : 'AppStore', useValue: appStore},
    {provide: 'Toto', useValue: 'toto'},
    {provide: 'Actions', useValue: actions}
];

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,

    ],
    declarations: [
        AppComponent,
        Home,
        Menu,
        Navbar
    ],
    providers : [
        ...APP_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}