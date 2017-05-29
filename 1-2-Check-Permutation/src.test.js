const arePermutations = require('./src');

const firstString = 'one';
const permString = 'eno';
const nonPermString = 'teo';

test(`${firstString} and ${permString} should be permutations`, () => {
  expect(arePermutations(firstString, permString)).toBe(true);
});

test(`${firstString} and ${nonPermString} should not be permutations`, () => {
  expect(arePermutations(firstString, nonPermString)).toBe(false);
});
