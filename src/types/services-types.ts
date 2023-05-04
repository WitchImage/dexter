export type Pagination = {
    perPage: number;
    page: number;
};

export type UtilityResponse = {
    count: number;
    next: string;
    previous: string;
    results: any[];
};
