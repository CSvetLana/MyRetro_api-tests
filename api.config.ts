import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: "tests/api",
    timeout: 30000,
    expect: {
        timeout: 5000,
    },
    retries: 0,
    reporter:[
        ["list"],
        ["html"],
    ],
    use: {
        baseURL: "https://myretro-stg.tochkavhoda.ru/api/",
        headless: true,
        actionTimeout: 10000,
        extraHTTPHeaders:{
        'Accept': "application/json;charset=UTF-8",
        'Cookie': "______"
    },
},

};
export default config;