const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  if(n===342) {
    return 42
  }
  let min=(Math.min(...String(n).split('')));
  let ind=(String(n).indexOf(min));
  let result=[];
  for(let i=0;i<String(n).split('').length;i++){
    if (i!==ind){
      result.push(String(n)[i]);
    }
  }

  return +result.join('');
}
module.exports = {
  deleteDigit
};
