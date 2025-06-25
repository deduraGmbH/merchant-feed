"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedBuilder = void 0;
const formatters_1 = require("./formatters");
const xml_properties_map_1 = require("./xml-properties-map");
const xmlbuilder2_xml_builder_1 = require("./xmlbuilder2-xml-builder");
class FeedBuilder {
    constructor(xmlBuilder = new xmlbuilder2_xml_builder_1.XMLBuilder2XMLBuilder()) {
        this.xmlBuilder = xmlBuilder;
        this.feed = {
            channel: {},
            products: [],
        };
    }
    withTitle(title) {
        this.feed.channel.title = title;
        return this;
    }
    withLink(link) {
        this.feed.channel.link = link;
        return this;
    }
    withDescription(description) {
        this.feed.channel.description = description;
        return this;
    }
    withProduct(product) {
        this.feed.products.push(product);
        return this;
    }
    getFeed() {
        return this.feed;
    }
    buildXml() {
        if (this.feed.products.length > 0) {
            this.feed.channel.item = this.feed.products.map((product) => (0, formatters_1.xmlObjectFormatter)(product, xml_properties_map_1.xmlPropertiesMap));
        }
        const feed = {
            rss: {
                "@xmlns:g": "http://base.google.com/ns/1.0",
                "@version": "2.0",
                channel: this.feed.channel,
            },
        };
        return this.xmlBuilder.buildXML(feed);
    }
}
exports.FeedBuilder = FeedBuilder;
//# sourceMappingURL=feed-builder.js.map