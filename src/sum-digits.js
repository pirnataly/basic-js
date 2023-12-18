const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arrFromN = [...String(n)]
  if (arrFromN.length === 1) {
    return n
  }
  let sum=0;
  let newArr = arrFromN;
  do {
    const initialValue = 0;
    sum = newArr.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue),
        initialValue,);
    newArr = [...String(sum)];
  }
  while ([...String(sum)].length>1);
  return (+newArr[0]);
}

module.exports = {
  getSumOfDigits
};
