export type Pagination = {
    perPage: number;
    offset: number;
};

export type UtilityResponse = {
    count: number;
    next: string;
    previous: string;
    results: any[];
};
