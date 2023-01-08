import express from "express"
import SampleRepositoryMock from "./repository/sample.repo_mock";
import initRoutes from "./routes";

const app = express();
app.use(express.urlencoded({ extended: true }))

// Services
const sampleRepo = new SampleRepositoryMock();
const sampleRoutes = initRoutes(app, sampleRepo);
// app.use("/", sampleRoutes);

export default app;
