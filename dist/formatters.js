"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlObjectFormatter = exports.xmlSingleItemProcessor = exports.xmlCustomLabelsFormatter = exports.xmlFixedNumberFormatBuilder = exports.xmlDateFormatter = void 0;
function xmlDateFormatter(date) {
    return date && date.toISOString();
}
exports.xmlDateFormatter = xmlDateFormatter;
function xmlFixedNumberFormatBuilder(precision) {
    return (value) => !Number.isNaN(value) && value.toFixed(precision);
}
exports.xmlFixedNumberFormatBuilder = xmlFixedNumberFormatBuilder;
function xmlCustomLabelsFormatter(items = [], _map = {}, root) {
    for (let i = 0; i < 5; i += 1) {
        if (items[i] !== undefined) {
            root[`g:custom_label_${i}`] = items[i];
        }
    }
}
exports.xmlCustomLabelsFormatter = xmlCustomLabelsFormatter;
function xmlSingleItemProcessor(prop, map, root) {
    if (map.xmlFormatter) {
        return map.xmlFormatter(prop, map.items, root);
    }
    return prop;
}
exports.xmlSingleItemProcessor = xmlSingleItemProcessor;
function xmlObjectFormatter(contents, map) {
    const item = {};
    for (const [mapKey, mapValue] of Object.entries(map)) {
        const content = contents[mapKey];
        if (content !== undefined) {
            const result = Array.isArray(content) && mapValue.allowRepeat
                ? content.map((s) => xmlSingleItemProcessor(s, mapValue, item))
                : xmlSingleItemProcessor(content, mapValue, item);
            if (mapValue.xmlName && result !== undefined) {
                item[mapValue.xmlName] = result;
            }
        }
    }
    return item;
}
exports.xmlObjectFormatter = xmlObjectFormatter;
//# sourceMappingURL=formatters.js.map