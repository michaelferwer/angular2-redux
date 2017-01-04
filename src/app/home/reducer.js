"use strict";
var actions = require("./action");
var initialState = {
    cpt: 0
};
function homeReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions.SAY_HELLO:
            state.cpt++;
            return state;
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = homeReducer;
//# sourceMappingURL=reducer.js.map