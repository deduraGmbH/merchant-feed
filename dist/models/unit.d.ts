export declare const UNIT: {
    readonly oz: "oz";
    readonly lb: "lb";
    readonly mg: "mg";
    readonly g: "g";
    readonly kg: "kg";
    readonly floz: "floz";
    readonly pt: "pt";
    readonly qt: "qt";
    readonly gal: "gal";
    readonly ml: "ml";
    readonly cl: "cl";
    readonly l: "l";
    readonly cbm: "cbm";
    readonly in: "in";
    readonly ft: "ft";
    readonly yd: "yd";
    readonly cm: "cm";
    readonly m: "m";
    readonly sqft: "sqft";
    readonly sqm: "sqm";
    readonly ct: "ct";
};
export declare namespace Unit {
    type Model = keyof typeof UNIT;
    function formatter(value: Model): string;
}
