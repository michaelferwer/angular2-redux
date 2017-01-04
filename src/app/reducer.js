"use strict";
// Combine reducers to a rootReducer
var redux_1 = require("redux");
var reducer_1 = require("./home/reducer");
var rootReducer = redux_1.combineReducers({
    home: reducer_1.default
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootReducer;
//# sourceMappingURL=reducer.js.map