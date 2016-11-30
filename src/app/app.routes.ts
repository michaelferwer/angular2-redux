import { RouterConfig } from '@angular/router';
import { Home } from './home';
// import { NoContent } from './no-content';  { path: '**',    component: NoContent }

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: '**', component: Home }
];
