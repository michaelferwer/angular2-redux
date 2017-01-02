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
var GoogleButton = (function () {
    function GoogleButton(appStore) {
        var _this = this;
        this.appStore = appStore;
        this.unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
        });
    }
    GoogleButton.prototype.ngOnInit = function () {
        console.log("code", this.code);
    };
    GoogleButton.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    return GoogleButton;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GoogleButton.prototype, "code", void 0);
GoogleButton = __decorate([
    core_1.Component({
        selector: 'googleButton',
        template: require('./googleButton.component.html'),
        styles: [require('./googleButton.component.scss')]
    }),
    __param(0, core_1.Inject('AppStore')),
    __metadata("design:paramtypes", [Object])
], GoogleButton);
exports.GoogleButton = GoogleButton;
//# sourceMappingURL=googleButton.component.js.map