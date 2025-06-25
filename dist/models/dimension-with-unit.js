"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionWithUnit = void 0;
const unit_1 = require("./unit");
var DimensionWithUnit;
(function (DimensionWithUnit) {
    function formatter(valueWithUnit) {
        return `${valueWithUnit.value} ${unit_1.Unit.formatter(valueWithUnit.unit)}`;
    }
    DimensionWithUnit.formatter = formatter;
})(DimensionWithUnit || (exports.DimensionWithUnit = DimensionWithUnit = {}));
//# sourceMappingURL=dimension-with-unit.js.map