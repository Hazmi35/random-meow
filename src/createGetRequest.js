const { request: httpRequest } = require("https");
const { parse } = require("url");
const { name, version, repository } = require("../package.json");

/**
* Creates a GET request
* @param {String} url Url
* @param {RequestOptions | object} [options] nodejs "https" options
* @returns {Promise<{ method: "GET", reqOptions: RequestOptions, raw: string, body: any,status: number, headers: IncomingHttpHeaders }>} A Promise containing response
* @private Internal Function - NO SUPPORT OUTSIDE RANDOM-MEOW
*/
module.exports = function get(url, options) {
            return new Promise((resolve, reject) => {
            const httpOptions = {
                hostname: parse(url).hostname,
                path: parse(url).path,
                method: "GET",
                headers: {}
            };
            const response = {
                method: "GET",
                reqOptions: httpOptions,
                raw: "",
                body: null,
                status: null,
                headers: null
            };
            httpOptions.headers["user-agent"] = `${name}/${version} (+${repository.url})`;
            httpOptions.headers["content-type"] = "application/json";
            Object.assign(httpOptions, options);
            const request = httpRequest(httpOptions, res => {
                response.status = res.statusCode;
                response.headers = res.headers;
                response.ok = res.statusCode >= 200 && res.statusCode < 300;
                res.on("data", chunk => {
                    response.raw += chunk;
                });
                res.on("end", () => {
                    response.body = res.headers["content-type"].includes("application/json") ? JSON.parse(response.raw) : response.raw;
                    if (response.ok) resolve(response);
                    else {
                        const err = new Error(`[random-meow] Error while trying to fetch, ${options.hostname}${options.path} ${res.statusCode} ${res.statusMessage}`);
                        Object.assign(err, response);
                        reject(err);
                    }
                });
            });

            request.on("error", err => {
                reject(err);
            });

            request.end();
        });
};