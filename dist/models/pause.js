"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pause = exports.PAUSE = void 0;
exports.PAUSE = {
    ads: "ads",
    all: "all",
};
var Pause;
(function (Pause) {
    function formatter(pause) {
        const isValidPause = (value) => {
            return value in exports.PAUSE;
        };
        if (!isValidPause(pause)) {
            throw new Error(`Invalid pause: "${pause}". Valid values are: ${Object.keys(exports.PAUSE).join(", ")}`);
        }
        return exports.PAUSE[pause];
    }
    Pause.formatter = formatter;
})(Pause || (exports.Pause = Pause = {}));
//# sourceMappingURL=pause.js.map