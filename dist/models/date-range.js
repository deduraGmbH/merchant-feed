"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRange = void 0;
var DateRange;
(function (DateRange) {
    function formatter(dateRange) {
        return `${dateRange.dateFrom.toISOString()}/${dateRange.dateTo.toISOString()}`;
    }
    DateRange.formatter = formatter;
})(DateRange || (exports.DateRange = DateRange = {}));
//# sourceMappingURL=date-range.js.map