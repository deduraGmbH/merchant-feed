export declare const AVAILABILITY: {
    readonly in_stock: "in_stock";
    readonly out_of_stock: "out_of_stock";
    readonly preorder: "preorder";
    readonly backorder: "backorder";
};
export declare namespace Availability {
    type Model = keyof typeof AVAILABILITY;
    function formatter(availability: Availability.Model): string;
}
