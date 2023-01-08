import { parseConfig } from "../../app/config"
import getMongoDBInstance from "../../app/database/mongodb"

test("MongoDB Connection", async () => {
    const configs = parseConfig(`${process.cwd()}/config/config.yml`)

    await getMongoDBInstance(configs).catch(() => { throw new Error("error in connecting to mongo") })
})
