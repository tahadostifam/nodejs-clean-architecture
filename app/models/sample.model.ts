export interface ISample {
    name: string
    age: number
}

export interface ISampleRepository {
    insert(newSample: ISample): Promise<ISample>,
    find(name: string): Promise<ISample>
    getAll(): Promise<ISample[]>
}
