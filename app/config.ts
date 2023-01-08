import fs from 'fs'
import YAML from 'yaml'

export interface IConfig {
    http: {
        host: string,
        port: number
    },
    mongo: {
        host: string,
        port: number,
        username: string,
        password: string,
        database: string,
    }
}

export function parseConfig(filename: string): IConfig {
    if (!fs.existsSync(filename)) {
        throw new Error("entered config file deos not exist: " + filename)
    }

    const file = fs.readFileSync(filename, { encoding: 'utf-8' });
    const configs = YAML.parse(file);
    return (configs as IConfig)
}
