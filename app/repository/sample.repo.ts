import { ISample, SampleModel } from "../models"
import { ISampleRepository } from "../models/sample.model"

export default class SampleRepository implements ISampleRepository {
    insert(newSample: ISample): Promise<ISample> {
        return new Promise(async (resolve: (cb: ISample) => void, reject) => {
            const obj = new SampleModel({
                name: newSample.name,
                age: newSample.age,
            })

            await obj.save().then(() => resolve(obj)).catch((reason) => reject(reason));
        })
    }

    find(name: string): Promise<ISample> {
        return new Promise(async (resolve: (cb: ISample) => void, reject) => {
            SampleModel.find({ name }).then((result) => resolve(result[0])).catch((reason) => reject(reason));
        })
    }

    getAll(): Promise<ISample[]> {
        return new Promise(async (resolve: (cb: ISample[]) => void, reject) => {
            SampleModel.find({}).then((result) => resolve(result)).catch((reason) => reject(reason));
        })
    }

}
