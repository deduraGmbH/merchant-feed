"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLBuilder2XMLBuilder = void 0;
const xmlbuilder2_1 = require("xmlbuilder2");
class XMLBuilder2XMLBuilder {
    constructor(options = {}) {
        this.options = options;
    }
    buildXML(contents) {
        const builder = (0, xmlbuilder2_1.create)(Object.assign({ encoding: "utf-8" }, this.options), contents);
        return builder.end({ prettyPrint: true });
    }
}
exports.XMLBuilder2XMLBuilder = XMLBuilder2XMLBuilder;
//# sourceMappingURL=xmlbuilder2-xml-builder.js.map