import express from "express"
import sampleRepo from "../repository/sample.repo";
import sampleController from "../controllers/sample.controller";

function initSampleRoutes(router: express.IRouter): express.IRouter {
    router.get("/home", sampleController().home);

    return router;
}

export default initSampleRoutes;
