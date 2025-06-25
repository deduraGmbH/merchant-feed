"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
var Price;
(function (Price) {
    function formatter(price) {
        return `${price.value.toFixed(2)} ${price.currency && price.currency.toUpperCase()}`;
    }
    Price.formatter = formatter;
})(Price || (exports.Price = Price = {}));
//# sourceMappingURL=price.js.map