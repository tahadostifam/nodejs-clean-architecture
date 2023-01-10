import mongoose from "mongoose";
import { parseConfig } from "../../app/config";
import getMongoDBInstance from "../../app/database/mongodb";
import SampleRepository from "../../app/repository/sample.repo_mock";

test('Sample Repository', async () => {
    const configs = parseConfig(`${process.cwd()}/config/config.yml`);

    await getMongoDBInstance(configs).then(() => {
        const sampleRepo = new SampleRepository();

        sampleRepo.insert({ name: "Person1", age: 15 });
        sampleRepo.insert({ name: "Person2", age: 15 });
        sampleRepo.insert({ name: "Person3", age: 15 });

        sampleRepo.getAll().then(data => {
            expect(data.length).toBe(3);
        })
    }).catch((reason) => { throw reason })

    mongoose.connection.close();
})
