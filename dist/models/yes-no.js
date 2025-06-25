"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YesNo = exports.YES_NO = void 0;
exports.YES_NO = {
    yes: "yes",
    no: "no",
};
var YesNo;
(function (YesNo) {
    function formatter(yesNo) {
        const isValidYesNo = (value) => {
            return value in exports.YES_NO;
        };
        const yesNoString = typeof yesNo === "boolean" ? (yesNo ? "yes" : "no") : yesNo;
        if (!isValidYesNo(yesNoString)) {
            throw new Error(`Invalid yes/no value: "${yesNo}". Valid values are: ${Object.keys(exports.YES_NO).join(", ")}`);
        }
        return exports.YES_NO[yesNoString];
    }
    YesNo.formatter = formatter;
})(YesNo || (exports.YesNo = YesNo = {}));
//# sourceMappingURL=yes-no.js.map