import { Component } from '@angular/core';
import '../../public/css/styles.scss';


/*import { Navbar } from './navbar';
import { Menu } from './menu';*/
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  /*directives: [Navbar, Menu]*/
})
export class AppComponent { }
