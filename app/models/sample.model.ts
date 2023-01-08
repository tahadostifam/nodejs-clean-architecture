import mongoose from "mongoose"

export interface ISample {
    name: string
    age: number
}

export interface ISampleRepository {
    insert(newSample: ISample): Promise<ISample>,
    find(name: string): Promise<ISample>
    getAll(): Promise<ISample[]>
}

const SampleSchema = new mongoose.Schema<ISample>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
});

export const SampleModel = mongoose.model<ISample>("Sample", SampleSchema);
