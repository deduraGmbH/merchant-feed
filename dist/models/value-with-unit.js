"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueWithUnit = void 0;
const unit_1 = require("./unit");
var ValueWithUnit;
(function (ValueWithUnit) {
    function formatter(valueWithUnit) {
        return `${valueWithUnit.value} ${unit_1.Unit.formatter(valueWithUnit.unit)}`;
    }
    ValueWithUnit.formatter = formatter;
    function formatterWithoutSpace(valueWithUnit) {
        return `${valueWithUnit.value}${unit_1.Unit.formatter(valueWithUnit.unit)}`;
    }
    ValueWithUnit.formatterWithoutSpace = formatterWithoutSpace;
})(ValueWithUnit || (exports.ValueWithUnit = ValueWithUnit = {}));
//# sourceMappingURL=value-with-unit.js.map