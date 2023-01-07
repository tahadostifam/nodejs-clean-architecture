import { Request, Response, NextFunction } from "express";
import postUseCase from "../use_cases/sample.use_case"
import sampleRepo from "../repository/sample.repo";
import { ISample } from "../models";

export interface ISampleController {
    home(req: Request, res: Response, next: NextFunction): void;
}

export default function sampleController(): ISampleController {
    const home = (req: Request, res: Response, next: NextFunction) => {
        postUseCase.getAll().then((cb) => res.json(cb))
            .catch((error: Error) => next(error));
    }

    return Object.freeze({ home });
}
