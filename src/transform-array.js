const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

    if (!Array.isArray(arr)) {
      let e=new Error('\'arr\' parameter must be an instance of the Array!');
      throw e;
     }


    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if ((i === 0 && (arr[i] === '--double-prev')) || ((i === arr.length - 1) && (arr[i] === '--double-next'))) {
        continue;
      }
      ;

      if (arr[i] === '--discard-next' || arr[i] === '--discard-prev') {
        continue;
      } else if (arr[i] === '--double-next') {
        newarr.push(arr[i + 1])
      } else if (arr[i] === '--double-prev') {
        if ((arr[i - 2] !== '--discard-next') || ((i - 2) < 0)) {
          newarr.push(arr[i - 1]);
        } else {
          continue
        }

      } else if (arr[i - 1] !== '--discard-next' && arr[i + 1] !== '--discard-prev') {
        newarr.push(arr[i]);
      } else {
        continue;
      }
    }

    return newarr;

}
module.exports = {
  transform
};
