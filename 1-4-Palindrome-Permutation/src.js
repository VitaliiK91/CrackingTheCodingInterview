/**
 * Returns true is given string
 * is a permutation of a palindrome.
 * Returns false otherwise
 */
const isPolindromePermutation = (input) => {
  if (!input || input.length < 1) {
    return false;
  }

  const trimmedInput = input.replace(' ', '');

  const lettersMap = {};
  const letters = [];
  for (let i = 0; i < trimmedInput.length; i += 1) {
    const letter = trimmedInput.charAt(i).toLowerCase();
    if (!lettersMap[letter]) {
      lettersMap[letter] = 1;
      letters.push(letter);
    } else {
      lettersMap[letter] += 1;
    }
  }

  if (trimmedInput.length % 2 === 0) {
    return letters.filter(letter => lettersMap[letter] % 2 !== 0).length < 1;
  }
  return letters.filter(letter => lettersMap[letter] % 2 !== 0).length === 1;
};

module.exports = isPolindromePermutation;
