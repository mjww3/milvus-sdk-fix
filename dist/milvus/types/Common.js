"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DslType = exports.IndexState = void 0;
var IndexState;
(function (IndexState) {
    IndexState[IndexState["IndexStateNone"] = 0] = "IndexStateNone";
    IndexState[IndexState["Unissued"] = 1] = "Unissued";
    IndexState[IndexState["InProgress"] = 2] = "InProgress";
    IndexState[IndexState["Finished"] = 3] = "Finished";
    IndexState[IndexState["Failed"] = 4] = "Failed";
})(IndexState = exports.IndexState || (exports.IndexState = {}));
var DslType;
(function (DslType) {
    DslType[DslType["Dsl"] = 0] = "Dsl";
    DslType[DslType["BoolExprV1"] = 1] = "BoolExprV1";
})(DslType = exports.DslType || (exports.DslType = {}));
//# sourceMappingURL=Common.js.map