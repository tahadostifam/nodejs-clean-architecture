import express from "express"
import { parseConfig } from "./config";
import getMongoDBInstance from "./database/mongodb";
import SampleRepository from "./repository/sample.repo";
import initRoutes from "./routes";

const app = express();
app.use(express.urlencoded({ extended: true }))

// Configs
const configs = parseConfig(`${process.cwd()}/config/config.yml`);
// Database
getMongoDBInstance(configs).then((mongoClient) => {
    // Services
    const sampleRepo = new SampleRepository();
    initRoutes(app, sampleRepo);
})

export default app;
