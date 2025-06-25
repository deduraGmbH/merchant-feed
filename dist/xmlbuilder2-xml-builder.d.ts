import { XMLBuilder } from "./protocols/xml-builder";
export declare class XMLBuilder2XMLBuilder implements XMLBuilder {
    private readonly options;
    constructor(options?: {
        encoding?: string;
    });
    buildXML(contents: string | object): string;
}
