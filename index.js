const { get } = require('node-superfetch'); //the core of this package

module.exports = randomMeow;

/**
 * Get a random image of a cat!
 * @returns {Promise} A promise that contains url to the image
 */
function randomMeow() {
        var fetch = async () => { //create fetch function
            var res = await get('https://aws.random.cat/meow'); //url of the api
            if (res.ok) { //if the status code is 200 (OK), then return the body
                return res.body;
            } else { //if not
                throw Error('Error: Error while fetching cat image :\n'+ res.error); //return an error
            }
        }
        var imageUrl = fetch().then(body => body.file); //get the image url
    
        return imageUrl; //return a image url
}
