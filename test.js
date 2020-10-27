/* eslint-disable no-undef */
const meow = require("./src/index");

test("will work", () => meow().then(data => expect(data).toMatch(/https:\/\/purr.objects-us-east-1.dream.io\/i\/(.+[a-z])/i)));
