"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Availability = exports.AVAILABILITY = void 0;
exports.AVAILABILITY = {
    in_stock: "in_stock",
    out_of_stock: "out_of_stock",
    preorder: "preorder",
    backorder: "backorder",
};
var Availability;
(function (Availability) {
    function formatter(availability) {
        const isValidAvailability = (value) => {
            return value in exports.AVAILABILITY;
        };
        if (!isValidAvailability(availability)) {
            throw new Error(`Invalid availability: "${availability}". Valid values are: ${Object.keys(exports.AVAILABILITY).join(", ")}`);
        }
        return exports.AVAILABILITY[availability];
    }
    Availability.formatter = formatter;
})(Availability || (exports.Availability = Availability = {}));
//# sourceMappingURL=availability.js.map