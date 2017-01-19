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
var home_service_1 = require("./home.service");
exports.SAY_HELLO = "HELLO";
var HomeActions = (function () {
    function HomeActions(homeService) {
        this.homeService = homeService;
    }
    HomeActions.prototype.sayHello = function () {
        return {
            type: exports.SAY_HELLO
        };
    };
    HomeActions.prototype.fetchData = function () {
        var _this = this;
        return function (dispatch, getState) {
            //dispatch(this.sayHello());
            return _this.homeService.getData(dispatch, getState, _this.sayHello);
        };
    };
    HomeActions.prototype.receiveData = function (data) {
        return {
            type: "DATA",
            data: data
        };
    };
    return HomeActions;
}());
HomeActions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeActions);
exports.HomeActions = HomeActions;
//# sourceMappingURL=action.js.map