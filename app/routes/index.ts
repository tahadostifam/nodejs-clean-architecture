import express from "express"
import SampleRoutes from "./sample.routes";
import sampleRepo from "../repository/sample.repo";
import initSampleRoutes from "./sample.routes";

const router = express.Router();

const sampleRoutes = initSampleRoutes(router)
router.use("/sample", sampleRoutes);

export default router;
