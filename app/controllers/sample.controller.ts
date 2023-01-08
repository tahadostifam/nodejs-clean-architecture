import "./index"
import { Request, Response, NextFunction } from "express";
import { ISampleRepository } from "../models/sample.model";
import SampleUseCase from "../use_cases/sample.use_case";
import { sendError } from "../presenter/error";
import { callUseCase } from "./index";

export interface ISampleController {
    home(req: Request, res: Response, next: NextFunction): void;
    add(req: Request, res: Response, next: NextFunction): void;
}

export default function sampleController(sampleRepo: ISampleRepository): ISampleController {
    const sampleUseCase = new SampleUseCase(sampleRepo);

    const home = (req: Request, res: Response, next: NextFunction) => {
        sampleUseCase.getAll().then((cb) => res.json(cb)).catch((error: Error) => next(error));
    }

    const add = (req: Request, res: Response, next: NextFunction) => {
        callUseCase(sampleUseCase.insert(req.body))
            .then(() => res.send("added successfully"))
            .catch((error) => sendError(res, next, error))
    }

    return Object.freeze({ home, add });
}
