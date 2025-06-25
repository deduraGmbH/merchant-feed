export declare const YES_NO: {
    readonly yes: "yes";
    readonly no: "no";
};
export declare namespace YesNo {
    type Model = keyof typeof YES_NO;
    function formatter(yesNo: YesNo.Model | boolean): string;
}
