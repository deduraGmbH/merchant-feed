import { Price } from "./price";
export declare namespace Shipping {
    type Model = {
        country: string;
        region?: string;
        service?: string;
        price?: Price.Model;
        minHandlingTime?: number;
        maxHandlingTime?: number;
        minTransitTime?: number;
        maxTransitTime?: number;
    };
}
