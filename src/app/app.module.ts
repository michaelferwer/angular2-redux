import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
// Components
import { AppComponent } from './app.component';
import { Menu } from './menu';
import { Navbar } from './navbar';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        Menu,
        Navbar
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }