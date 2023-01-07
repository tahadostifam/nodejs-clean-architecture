import { ISample } from "../models"
import { ISampleRepository } from "../models/sample.model"

class SampleRepository implements ISampleRepository {
    insert(): Promise<ISample> {
        return new Promise((resolve: (cb: ISample) => void, reject) => {})
    }
    remove(): Promise<ISample> {
        return new Promise((resolve: (cb: ISample) => void, reject) => {})
    }
    update(): Promise<ISample> {
        return new Promise((resolve: (cb: ISample) => void, reject) => {})
    }
    find(): Promise<ISample> {
        return new Promise((resolve: (cb: ISample) => void, reject) => {})
    }
}

export default new SampleRepository();
