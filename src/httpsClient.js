module.exports = class HttpsClient {
    /**
     * Construct a customized https client
     * 
     * NOTE: I DO NOT RECOMMEND USING THIS CLIENT OUTSIDE OF random-meow
     * @returns {HttpsClient} HttpsClient
     */
    constructor() {
        this._https = require('https');
        this._url = require("url");
        this._pkgJson = require('../package.json');
    }

    /**
     * Creates a GET request
     * @param {String} url API URL
     * @param {RequestOptions | object} [httpOptions] nodejs "https" options
     * @returns {Promise<object>} A Promise containing response
     */
    get(url, httpOptions) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: this._url.parse(url).hostname,
                path: this._url.parse(url).path,
                method: "GET",
                headers: {}
            };
            const response = {
                method: "GET",
                reqOptions: options,
                raw: "",
                body: null,
                status: null,
                headers: null
            };
            options.headers["user-agent"] = `${this._pkgJson.name}/${this._pkgJson.version}`;
            options.headers["content-type"] = "application/json";
            Object.assign(options, httpOptions);
            const request = this._https.request(options, res => {
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
    }
};
