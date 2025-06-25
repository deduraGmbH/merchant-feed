export declare const AGE_GROUP: {
    readonly newborn: "newborn";
    readonly infant: "infant";
    readonly toddler: "toddler";
    readonly kids: "kids";
    readonly adult: "adult";
};
export declare namespace AgeGroup {
    type Model = keyof typeof AGE_GROUP;
    function formatter(ageGroup: AgeGroup.Model): string;
}
