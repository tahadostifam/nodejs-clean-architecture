import { ISample } from "../models"
import { ISampleRepository } from "../models/sample.model"

class SampleRepository implements ISampleRepository {
    insert(): Promise<ISample> {
        return new Promise((resolve: (cb: ISample) => void, reject) => { })
    }

    find(): Promise<ISample> {
        return new Promise((resolve: (cb: ISample) => void, reject) => { })
    }

    getAll(): Promise<ISample[]> {
        return new Promise((resolve: (cb: ISample[]) => void, reject) => { })
    }
}

export default new SampleRepository();
