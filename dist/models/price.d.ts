export declare namespace Price {
    type Model = {
        value: number;
        currency: string;
    };
    function formatter(price: Price.Model): string;
}
