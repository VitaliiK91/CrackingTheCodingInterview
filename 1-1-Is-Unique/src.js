/**
 * Returns true if given string has all unique
 * charachters, uncluding special
 * charachters and upper/lower cases.
 * Returns false otherwise.
 */
const isUnique = (string) => {
  const resObject = {};
  for (let i = 0; i < string.length; i += 1) {
    const char = string.charAt(i);
    if (!resObject[char]) {
      resObject[char] = char;
    } else {
      return false;
    }
  }
  return true;
};

module.exports = isUnique;
