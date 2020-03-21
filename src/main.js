const request = new (require('./httpsClient'));

/**
 * Get a random cat image
 * @returns {Promise} A promise that contains url to the image
 */
module.exports = function randomMeow() {
    return new Promise((resolve, reject) => {
        request.get('htt[s://aws.random.cat/meow').then(res => {
            resolve(res.body.file);
        }).catch(reject);
    });
};
