const get = require('./createGetRequest');

/**
 * Get a random cat image
 * @returns {Promise<string>} A promise that contains url to the image
 */
function meow() {
    return new Promise((resolve, reject) => {
        get('https://random.cat').then(res => {
            resolve(res.toString().split('img src')[1].split('\'')[1]);
        }).catch(reject);
    });
}

module.exports = Object.assign(meow, {get});
