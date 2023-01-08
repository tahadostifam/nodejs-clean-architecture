import { NextFunction } from "connect";
import { Response } from "express";

export function sendError(res: Response, next: NextFunction, error: Error) {
    res.status(500).send({
        code: 500,
        message: "unfortunately an error happend on the server side",
        detail: error.message,
    })
    next();
}
