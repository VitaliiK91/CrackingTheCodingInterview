const isUnique = require('./src');

const uniqueString = 'abcdefg';
const notUniqueString = 'aabcdefg';

test(`${uniqueString} to be unique`, () => {
  expect(isUnique(uniqueString)).toBe(true);
});

test(`${notUniqueString} not to be unique`, () => {
  expect(isUnique(notUniqueString)).toBe(false);
});
