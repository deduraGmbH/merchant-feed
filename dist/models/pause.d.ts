export declare const PAUSE: {
    readonly ads: "ads";
    readonly all: "all";
};
export declare namespace Pause {
    type Model = keyof typeof PAUSE;
    function formatter(pause: Pause.Model): string;
}
