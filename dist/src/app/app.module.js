"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// Material
require("material-design-lite/material.min.css");
require("material-design-lite/material.min.js");
// Pages
var app_component_1 = require("./app.component");
var home_1 = require("./home");
// Components
var menu_1 = require("./component/menu");
var navbar_1 = require("./component/navbar");
// Routing
var app_routes_1 = require("./app.routes");
var redux_1 = require("redux");
var reducer_1 = require("./reducer");
var actions = require("./actions");
var appStore = redux_1.createStore(reducer_1.default);
var APP_PROVIDERS = [
    { provide: 'AppStore', useValue: appStore },
    { provide: 'Toto', useValue: 'toto' },
    { provide: 'Actions', useValue: actions }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_1.Home,
            menu_1.Menu,
            navbar_1.Navbar
        ],
        providers: APP_PROVIDERS.slice(),
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map