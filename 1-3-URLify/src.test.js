const URLify = require('./src');

const url = 'i am a url';
const encodedUrl = 'i%20am%20a%20url';

test(`${url} should be ${encodedUrl}`, () => {
  expect(URLify(url)).toBe(encodedUrl);
});
