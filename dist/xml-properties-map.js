"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlPropertiesMap = void 0;
const formatters_1 = require("./formatters");
const models_1 = require("./models");
const pause_1 = require("./models/pause");
exports.xmlPropertiesMap = {
    id: { xmlName: "g:id" },
    title: { xmlName: "g:title" },
    description: { xmlName: "g:description" },
    link: { xmlName: "g:link" },
    imageLink: { xmlName: "g:image_link" },
    mobileLink: { xmlName: "g:mobile_link" },
    additionalImageLinks: {
        xmlName: "g:additional_image_link",
        allowRepeat: true,
    },
    availability: {
        xmlName: "g:availability",
        xmlFormatter: models_1.Availability.formatter,
    },
    availabilityDate: {
        xmlName: "g:availability_date",
        xmlFormatter: formatters_1.xmlDateFormatter,
    },
    expirationDate: {
        xmlName: "g:expiration_date",
        xmlFormatter: formatters_1.xmlDateFormatter,
    },
    price: {
        xmlName: "g:price",
        xmlFormatter: models_1.Price.formatter,
    },
    salePrice: { xmlName: "g:sale_price", xmlFormatter: models_1.Price.formatter },
    salePriceEffectiveDate: {
        xmlName: "g:sale_price_effective_date",
        xmlFormatter: models_1.DateRange.formatter,
    },
    costOfGoodsSold: {
        xmlName: "g:cost_of_goods_sold",
        xmlFormatter: models_1.Price.formatter,
    },
    unitPricingMeasure: {
        xmlName: "g:unit_pricing_measure",
        xmlFormatter: models_1.ValueWithUnit.formatterWithoutSpace,
    },
    unitPricingBaseMeasure: {
        xmlName: "g:unit_pricing_base_measure",
        xmlFormatter: models_1.ValueWithUnit.formatterWithoutSpace,
    },
    productLength: {
        xmlName: "g:product_length",
        xmlFormatter: models_1.DimensionWithUnit.formatter,
    },
    productWidth: {
        xmlName: "g:product_width",
        xmlFormatter: models_1.DimensionWithUnit.formatter,
    },
    productHeight: {
        xmlName: "g:product_height",
        xmlFormatter: models_1.DimensionWithUnit.formatter,
    },
    productWeight: {
        xmlName: "g:product_weight",
        xmlFormatter: models_1.WeightWithUnit.formatter,
    },
    installment: {
        xmlName: "g:installment",
        xmlFormatter: formatters_1.xmlObjectFormatter,
        items: {
            months: { xmlName: "g:months" },
            amount: { xmlName: "g:amount", xmlFormatter: models_1.Price.formatter },
        },
    },
    loyaltyPoints: {
        xmlName: "g:loyalty_points",
        xmlFormatter: formatters_1.xmlObjectFormatter,
        items: {
            name: { xmlName: "g:name" },
            pointsValue: { xmlName: "g:points_value" },
            ratio: {
                xmlName: "g:ratio",
                xmlFormatter: (0, formatters_1.xmlFixedNumberFormatBuilder)(1),
            },
        },
    },
    googleProductCategory: { xmlName: "g:google_product_category" },
    productType: { xmlName: "g:product_type", allowRepeat: true },
    brand: { xmlName: "g:brand" },
    gtin: { xmlName: "g:gtin", allowRepeat: true },
    mpn: { xmlName: "g:mpn" },
    identifierExists: { xmlName: "g:identifier_exists" },
    condition: { xmlName: "g:condition" },
    adult: { xmlName: "g:adult" },
    multipack: { xmlName: "g:multipack" },
    isBundle: { xmlName: "g:is_bundle" },
    energyEfficiencyClass: { xmlName: "g:energy_efficiency_class" },
    minEnergyEfficiencyClass: { xmlName: "g:min_energy_efficiency_class" },
    maxEnergyEfficiencyClass: { xmlName: "g:max_energy_efficiency_class" },
    ageGroup: {
        xmlName: "g:age_group",
        xmlFormatter: models_1.AgeGroup.formatter,
    },
    color: { xmlName: "g:color" },
    gender: { xmlName: "g:gender" },
    material: { xmlName: "g:material" },
    pattern: { xmlName: "g:pattern" },
    size: { xmlName: "g:size" },
    sizeType: { xmlName: "g:size_type" },
    sizeSystem: { xmlName: "g:size_system" },
    itemGroupId: { xmlName: "g:item_group_id" },
    adsRedirect: { xmlName: "g:ads_redirect" },
    customLabels: { xmlFormatter: formatters_1.xmlCustomLabelsFormatter },
    promotionId: { xmlName: "g:promotion_id", allowRepeat: true },
    includedDestination: { xmlName: "g:included_destination", allowRepeat: true },
    excludedDestination: { xmlName: "g:excluded_destination", allowRepeat: true },
    shipping: {
        xmlName: "g:shipping",
        xmlFormatter: formatters_1.xmlObjectFormatter,
        allowRepeat: true,
        items: {
            country: { xmlName: "g:country" },
            region: { xmlName: "g:region" },
            postalCode: { xmlName: "g:postal_code" },
            locationId: { xmlName: "g:location_id" },
            locationGroupName: { xmlName: "g:location_group_name" },
            service: { xmlName: "g:service" },
            price: { xmlName: "g:price", xmlFormatter: models_1.Price.formatter },
            minHandlingTime: { xmlName: "g:min_handling_time" },
            maxHandlingTime: { xmlName: "g:max_handling_time" },
            minTransitTime: { xmlName: "g:min_transit_time" },
            maxTransitTime: { xmlName: "g:max_transit_time" },
        },
    },
    shippingLabel: { xmlName: "g:shipping_label" },
    shippingWeight: {
        xmlName: "g:shipping_weight",
        xmlFormatter: models_1.ValueWithUnit.formatter,
    },
    shippingLength: {
        xmlName: "g:shipping_length",
        xmlFormatter: models_1.ValueWithUnit.formatter,
    },
    shippingWidth: {
        xmlName: "g:shipping_width",
        xmlFormatter: models_1.ValueWithUnit.formatter,
    },
    shippingHeight: {
        xmlName: "g:shipping_height",
        xmlFormatter: models_1.ValueWithUnit.formatter,
    },
    minHandlingTime: { xmlName: "g:min_handling_time" },
    maxHandlingTime: { xmlName: "g:max_handling_time" },
    tax: {
        xmlName: "g:tax",
        xmlFormatter: formatters_1.xmlObjectFormatter,
        allowRepeat: true,
        items: {
            country: { xmlName: "g:country" },
            region: { xmlName: "g:region" },
            postalCode: { xmlName: "g:postal_code" },
            locationId: { xmlName: "g:location_id" },
            locationGroupName: { xmlName: "g:location_group_name" },
            rate: { xmlName: "g:rate", xmlFormatter: (0, formatters_1.xmlFixedNumberFormatBuilder)(2) },
            taxShip: { xmlName: "g:tax_ship", xmlFormatter: models_1.YesNo.formatter },
        },
    },
    taxCategory: { xmlName: "g:tax_category" },
    subscriptionCost: {
        xmlName: "g:subscription_cost",
        xmlFormatter: formatters_1.xmlObjectFormatter,
        items: {
            amount: { xmlName: "g:amount", xmlFormatter: models_1.Price.formatter },
            period: { xmlName: "g:period" },
            periodLength: { xmlName: "g:period_length" },
        },
    },
    certification: {
        xmlName: "g:certification",
        xmlFormatter: formatters_1.xmlObjectFormatter,
        items: {
            authority: { xmlName: "g:certification_authority" },
            name: { xmlName: "g:certification_name" },
            code: { xmlName: "g:certification_code" },
        },
    },
    shoppingAdsExcludedCountries: {
        xmlName: "g:shopping_ads_excluded_country",
        allowRepeat: true,
    },
    externalSellerId: {
        xmlName: "g:external_seller_id",
    },
    lifestyleImageLink: {
        xmlName: "g:lifestyle_image_link",
    },
    pause: {
        xmlName: "g:pause",
        xmlFormatter: pause_1.Pause.formatter,
    },
    productDetail: {
        xmlName: "g:product_detail",
        allowRepeat: true,
        xmlFormatter: formatters_1.xmlObjectFormatter,
        items: {
            sectionName: { xmlName: "g:section_name" },
            attributeName: { xmlName: "g:attribute_name" },
            attributeValue: { xmlName: "g:attribute_value" },
        },
    },
    productHighlight: {
        xmlName: "g:product_highlight",
        allowRepeat: true,
    },
    shipsFromCountry: {
        xmlName: "g:ships_from_country",
    },
    transitTimeLabel: {
        xmlName: "g:transit_time_label",
    },
    internal_label: {
        xmlName: "internal_label",
        allowRepeat: true,
    },
};
//# sourceMappingURL=xml-properties-map.js.map