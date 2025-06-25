import { UNIT } from "./unit";
export declare namespace DimensionWithUnit {
    type Model = {
        value: number;
        unit: keyof Pick<typeof UNIT, "cm" | "in">;
    };
    function formatter(valueWithUnit: Model): string;
}
