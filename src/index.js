const get = require("./createGetRequest");

/**
 * Get a random cat image
 * @param {boolean} [tryWithHttp] Whether to try with HTTP if fails on HTTPS (default: true)
 * @returns {Promise<string>} A promise that contains url to the image
 */
function meow(tryWithHttp = true) {
    return new Promise((resolve, reject) => {
        get("https://aws.random.cat/meow")
            .then(res => resolve(res.body.file))
            .catch(e => {
                if (tryWithHttp) get("http://aws.random.cat/meow").then(res => resolve(res.body.file)).catch(reject);
                else reject(e)
            });
    });
}

module.exports = Object.assign(meow, { get });
