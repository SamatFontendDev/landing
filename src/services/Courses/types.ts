export interface GetCoursesResponse {
    disclaimer: string
    date: string
    timestamp: number
    base: string
    rates: Rates
}

export interface Rates {
    [key: string]: number
}
