import { ISample } from "../models"

class SampleRepository {
    insert() {
        console.warn("Method not implemented");

    }
    remove() {
        console.warn("Method not implemented");

    }
    update() {
        console.warn("Method not implemented");

    }
    find(): Promise<ISample> {
        return new Promise((resolve: (cb: ISample) => void, reject) => {
            resolve({name: "Taha", age: 15} as ISample);
        })
    }
}

export default new SampleRepository();
