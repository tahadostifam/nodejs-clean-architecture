import express from "express"
import { ISampleRepository } from "../models/sample.model";
import initSampleRoutes from "./sample.routes";

export default function initRoutes(router: express.IRouter, sampleRepo: ISampleRepository): express.IRouter {
    const sampleRoutes = initSampleRoutes(sampleRepo)

    router.use("/sample", sampleRoutes);

    return router;
}
