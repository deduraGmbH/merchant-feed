import { Feed } from "./models/feed";
import { Product } from "./models/product";
import { XMLBuilder } from "./protocols/xml-builder";
export declare class FeedBuilder {
    private readonly xmlBuilder;
    private feed;
    constructor(xmlBuilder?: XMLBuilder);
    withTitle(title: string): this;
    withLink(link: string): this;
    withDescription(description: string): this;
    withProduct(product: Product): this;
    getFeed(): Feed;
    buildXml(): string;
}
