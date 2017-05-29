/**
 * Retuns true, if second argument
 * is a permutation of first argument.
 * Retuns false otherwise.
 */
const arePermutations = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const firstLetterMap = {};
  for (let i = 0; i < first.length; i += 1) {
    const index = first.charAt(i);
    if (firstLetterMap[index]) {
      firstLetterMap[index] += 1;
    } else {
      firstLetterMap[index] = 1;
    }
  }

  const secondLetterMap = {};
  for (let i = 0; i < second.length; i += 1) {
    const index = second.charAt(i);
    if (secondLetterMap[index]) {
      secondLetterMap[index] += 1;
    } else {
      secondLetterMap[index] = 1;
    }
  }

  return !Object.keys(firstLetterMap)
    .find(index => firstLetterMap[index] !== secondLetterMap[index]);
};

module.exports = arePermutations;
