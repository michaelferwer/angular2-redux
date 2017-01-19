"use strict";
exports.SAY_HELLO = "HELLO";
var HomeActions = (function () {
    function HomeActions() {
    }
    HomeActions.prototype.sayHello = function () {
        return {
            type: exports.SAY_HELLO
        };
    };
    return HomeActions;
}());
exports.HomeActions = HomeActions;
//# sourceMappingURL=action.js.map