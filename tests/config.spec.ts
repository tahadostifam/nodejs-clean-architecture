import { parseConfig } from "../app/config";

test("Config", () => {
    parseConfig(`${process.cwd()}/config/config.yml`);
})
