import { NextFunction, Response } from "express";

// REVIEW in the future
export function callUseCase<Type>(callResult: Promise<Type> | Error) {
    if (callResult instanceof Error) {
        return Promise.reject(callResult);
    }

    return callResult as Promise<Type>;
}

