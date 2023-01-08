import { ISample } from "../models";
import { ISampleRepository } from "../models/sample.model";

export interface ISampleUseCase {
    getAll(): Promise<ISample[]>
    insert(newSample: ISample): Promise<ISample> | Error
}

class SampleUseCase implements ISampleUseCase {
    constructor(private sampleRepo: ISampleRepository) { }

    insert(newSample: ISample): Promise<ISample> | Error {
        if (newSample.name.length == 0 || !newSample.age) {
            // REVIEW in the future
            return new Error("name and age are required")
        }

        return this.sampleRepo.insert(newSample);
    }

    getAll(): Promise<ISample[]> {
        return this.sampleRepo.getAll();
    }
}

export default SampleUseCase;
