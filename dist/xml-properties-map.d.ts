import { Product } from "./models/product";
export type XmlPropertiesMapNode = {
    xmlName?: string;
    xmlFormatter?: (...value: any) => Record<string, string> | string | void;
    allowRepeat?: boolean;
    items?: Record<string, XmlPropertiesMapNode>;
};
export type XmlPropertiesMapNodeItems = XmlPropertiesMapNode["items"];
export declare const xmlPropertiesMap: Record<keyof Product, XmlPropertiesMapNode>;
