import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Home} from "./home";
// import { NoContent } from './no-content';  { path: '**',    component: NoContent }

const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: '**', component: Home}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}