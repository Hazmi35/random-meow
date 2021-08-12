## random-meow
A Small package to get a random cat image

Powered by: https://random.cat/

[![N|Solid](https://nodei.co/npm/random-meow.png?downloads=true&stars=false)](https://www.npmjs.org/package/random-meow)


# Installation
### NPM
```
npm install random-meow
```
### Yarn
```
yarn add random-meow
```

# Usage
```js
const meow = require("random-meow");

// [note] You can use async/await
meow().then(url => console.log(url)).catch(console.error);
```

### Note
This package requires Node.js version 6.13.0 or above, although the tested version is 10.x to 14.x, 6.13.0 to 9.x should work too