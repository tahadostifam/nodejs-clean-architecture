import { ISample, ISampleRepository } from "../models/sample.model"


export default class SampleRepositoryMock implements ISampleRepository {
    private samples: ISample[] = [];

    insert(newSample: ISample): Promise<ISample> {
        return new Promise((resolve: (cb: ISample) => void, reject) => {
            this.samples.push(newSample);

            resolve(newSample);
        })
    }
    find(name: string): Promise<ISample> {
        return new Promise((resolve: (sample: ISample) => void, reject) => {
            const result = this.samples.find(element => element.name === name);

            if (result) {
                resolve(result)
            }

            reject()
        })
    }

    getAll(): Promise<ISample[]> {
        return new Promise((resolve: (samples: ISample[]) => void, reject) => {
            resolve(this.samples);
        })
    }
}
