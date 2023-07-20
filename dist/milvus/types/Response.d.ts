export declare enum ErrorCode {
    SUCCESS = "Success",
    INDEX_NOT_EXIST = "IndexNotExist",
    UNEXPECTED_ERROR = "UnexpectedError",
    EMPTY_COLLECTION = "EmptyCollection"
}
export interface GetVersionResponse {
    version: string;
}
export interface CheckHealthResponse {
    isHealthy: boolean;
    reasons: [];
}
