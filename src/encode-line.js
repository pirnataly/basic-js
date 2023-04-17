const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  let arr=[];
  let sum;
  for(let i=0; i<str.length; i=i+sum) {
    sum=1;
    for(let j=i+1; j<=str.length;j++) {
      if (str[i]!==str[j]) {
           arr.push([sum, str[i]]);
          break;
        }

      else {
        sum=sum+1;
      }
    }
  }
  return (arr.join('').replace(/[\s.,%,1]/g, ''));
}

module.exports = {
  encodeLine
};
