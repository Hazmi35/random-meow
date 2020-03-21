## random-meow
A Small package to get a random cat image

Powered by: https://random.cat/

[![N|Solid](https://nodei.co/npm/random-meow.png?downloads=true&stars=false)](https://www.npmjs.org/package/random-meow)


## Installation
```
npm install random-meow
```

## Usage
```js
const randomMeow = require("random-meow");

randomMeow().then(url => console.log(url)).catch(console.error);
```