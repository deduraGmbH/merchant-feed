import { XmlPropertiesMapNode, XmlPropertiesMapNodeItems } from "./xml-properties-map";
export declare function xmlDateFormatter(date?: Date): string;
export declare function xmlFixedNumberFormatBuilder(precision: number): (value: number) => string;
export declare function xmlCustomLabelsFormatter(items: string[], _map: any, root: Record<string, string>): void;
export declare function xmlSingleItemProcessor<T = unknown>(prop: T, map: XmlPropertiesMapNode, root: Record<string, string>): string | void | Record<string, string> | T;
export declare function xmlObjectFormatter<T extends Record<string, unknown>>(contents: T, map: XmlPropertiesMapNodeItems): Record<string, any>;
