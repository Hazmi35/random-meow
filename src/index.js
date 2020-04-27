const get = require('./createGetRequest');

/**
 * Get a random cat image
 * @returns {Promise<string>} A promise that contains url to the image
 */
function meow() {
    return new Promise((resolve, reject) => {
        get('https://aws.random.cat/meow').then(res => {
            resolve(res.body.file);
        }).catch(reject);
    });
}

module.exports = Object.assign(meow, {get});