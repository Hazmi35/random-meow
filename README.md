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
