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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var action_1 = require("./action");
var Home = (function () {
    function Home(appStore, actions, route, router) {
        var _this = this;
        this.appStore = appStore;
        this.actions = actions;
        this.route = route;
        this.router = router;
        this.cpt = 0;
        this.appStoreSub = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.cpt = state.home.cpt;
        });
    }
    Home.prototype.ngOnInit = function () {
        /*this.routerSub = this.router.routerState.queryParams.subscribe(queryParams => {
         this.code = queryParams["code"];
         });*/
    };
    Home.prototype.ngOnDestroy = function () {
        this.appStoreSub();
        /*this.routerSub();*/
    };
    Home.prototype.clickButton = function () {
        this.appStore.dispatch(this.actions.sayHello());
    };
    return Home;
}());
Home = __decorate([
    core_1.Component({
        selector: 'home',
        template: require('./home.component.html'),
        styles: [require('./home.component.scss')],
        providers: [action_1.HomeActions]
    }),
    __param(0, core_1.Inject('AppStore')),
    __metadata("design:paramtypes", [Object, action_1.HomeActions, router_1.ActivatedRoute, router_1.Router])
], Home);
exports.Home = Home;
//# sourceMappingURL=home.component.js.map