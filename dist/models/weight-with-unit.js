"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightWithUnit = void 0;
const unit_1 = require("./unit");
var WeightWithUnit;
(function (WeightWithUnit) {
    function formatter(valueWithUnit) {
        return `${valueWithUnit.value} ${unit_1.Unit.formatter(valueWithUnit.unit)}`;
    }
    WeightWithUnit.formatter = formatter;
})(WeightWithUnit || (exports.WeightWithUnit = WeightWithUnit = {}));
//# sourceMappingURL=weight-with-unit.js.map