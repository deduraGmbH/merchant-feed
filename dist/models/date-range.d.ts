export declare namespace DateRange {
    type Model = {
        dateFrom: Date;
        dateTo: Date;
    };
    function formatter(dateRange: DateRange.Model): string;
}
