"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlDateFormatter = xmlDateFormatter;
exports.xmlFixedNumberFormatBuilder = xmlFixedNumberFormatBuilder;
exports.xmlCustomLabelsFormatter = xmlCustomLabelsFormatter;
exports.xmlSingleItemProcessor = xmlSingleItemProcessor;
exports.xmlObjectFormatter = xmlObjectFormatter;
function xmlDateFormatter(date) {
    return date && date.toISOString();
}
function xmlFixedNumberFormatBuilder(precision) {
    return (value) => !Number.isNaN(value) && value.toFixed(precision);
}
function xmlCustomLabelsFormatter(items = [], _map = {}, root) {
    for (let i = 0; i < 5; i += 1) {
        if (items[i] !== undefined) {
            root[`g:custom_label_${i}`] = items[i];
        }
    }
}
function xmlSingleItemProcessor(prop, map, root) {
    if (map.xmlFormatter) {
        return map.xmlFormatter(prop, map.items, root);
    }
    return prop;
}
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
//# sourceMappingURL=formatters.js.map