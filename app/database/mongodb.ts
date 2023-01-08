import mongoose from "mongoose";
import mongoUrBuilder from 'mongo-uri-builder'
import { IConfig } from "../config";

let instance: any | null = null;
export default function getMongoDBInstance(config: IConfig) {
    return new Promise(async (resolve: (conn: mongoose.Mongoose) => void) => {
        if (!instance) {
            const uri = mongoUrBuilder({
                host: config.mongo.host,
                port: config.mongo.port,
                username: config.mongo.username,
                password: config.mongo.password,
            })

            mongoose.set('strictQuery', false);
            const db = await mongoose.connect(uri, {})
            instance = db;
            resolve(instance);
        }

        resolve(instance);
    })
}
