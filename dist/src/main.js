"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_1 = require("./app");
if (process.env.ENV === 'dev') {
}
else if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_1.AppModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map