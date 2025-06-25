import { Unit } from "./unit";
export declare namespace ValueWithUnit {
    type Model = {
        value: number;
        unit: Unit.Model;
    };
    function formatter(valueWithUnit: Model): string;
    function formatterWithoutSpace(valueWithUnit: Model): string;
}
