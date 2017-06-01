const isPolindromePermutation = require('./src');

const polindrome = 'Tact Coa';
const nonPolindrome = 'Tact Coat';

test(`${polindrome} should be true`, () => {
  expect(isPolindromePermutation(polindrome)).toBe(true);
});

test(`${nonPolindrome} should be false`, () => {
  expect(isPolindromePermutation(nonPolindrome)).toBe(false);
});
