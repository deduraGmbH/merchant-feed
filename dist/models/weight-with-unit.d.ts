import { UNIT } from "./unit";
export declare namespace WeightWithUnit {
    type Model = {
        value: number;
        unit: keyof Pick<typeof UNIT, "lb" | "oz" | "g" | "kg">;
    };
    function formatter(valueWithUnit: Model): string;
}
