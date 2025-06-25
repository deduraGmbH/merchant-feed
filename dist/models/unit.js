"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = exports.UNIT = void 0;
exports.UNIT = {
    oz: "oz",
    lb: "lb",
    mg: "mg",
    g: "g",
    kg: "kg",
    floz: "floz",
    pt: "pt",
    qt: "qt",
    gal: "gal",
    ml: "ml",
    cl: "cl",
    l: "l",
    cbm: "cbm",
    in: "in",
    ft: "ft",
    yd: "yd",
    cm: "cm",
    m: "m",
    sqft: "sqft",
    sqm: "sqm",
    ct: "ct",
};
var Unit;
(function (Unit) {
    function formatter(value) {
        const isValidUnit = (value) => {
            return Object.values(exports.UNIT).includes(value);
        };
        if (!isValidUnit(value)) {
            throw new Error(`Invalid unit: "${value}". Valid values are: ${Object.keys(exports.UNIT).join(", ")}`);
        }
        return value;
    }
    Unit.formatter = formatter;
})(Unit || (exports.Unit = Unit = {}));
//# sourceMappingURL=unit.js.map