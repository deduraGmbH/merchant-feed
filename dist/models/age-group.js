"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgeGroup = exports.AGE_GROUP = void 0;
exports.AGE_GROUP = {
    newborn: "newborn",
    infant: "infant",
    toddler: "toddler",
    kids: "kids",
    adult: "adult",
};
var AgeGroup;
(function (AgeGroup) {
    function formatter(ageGroup) {
        const isValidAgeGroup = (value) => {
            return value in exports.AGE_GROUP;
        };
        if (!isValidAgeGroup(ageGroup)) {
            throw new Error(`Invalid age group: "${ageGroup}". Valid values are: ${Object.keys(exports.AGE_GROUP).join(", ")}`);
        }
        return exports.AGE_GROUP[ageGroup];
    }
    AgeGroup.formatter = formatter;
})(AgeGroup || (exports.AgeGroup = AgeGroup = {}));
//# sourceMappingURL=age-group.js.map