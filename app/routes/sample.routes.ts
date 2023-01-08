import express from "express"
import sampleController from "../controllers/sample.controller";
import { ISampleRepository } from "../models/sample.model";

function initSampleRoutes(sampleRepo: ISampleRepository): express.IRouter {
    const router: express.Router = express.Router();

    router.get("/list", sampleController(sampleRepo).home);
    router.post("/add", sampleController(sampleRepo).add);

    return router;
}

export default initSampleRoutes;
