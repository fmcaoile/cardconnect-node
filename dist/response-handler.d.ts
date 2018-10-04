export declare class ResponseHandler {
    static resolve<T>(value: T, resolve: (response: T) => void, callback?: (error: any, response: T) => void): void;
    static reject<T>(value: T, reject: (error: T) => void, callback?: (error: T, response?: any) => void): void;
}
