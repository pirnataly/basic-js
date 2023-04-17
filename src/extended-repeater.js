const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(typeof str!=='string'){
    str=(String(str) || str.toString()) ;
  }
  if(typeof options.addition!=='string'){
    options.addition=( String(options.addition)||options.addition.toString());

  }
  let result='';
  function getStr() {
    let additionSeparator=options.additionSeparator?options.additionSeparator:'|';
    let optionsAddition = (options.addition==='undefined')?'':options.addition;
    additionSeparator=optionsAddition?additionSeparator:'';
    for(let i=0;i<(options.additionRepeatTimes||1);i++) {
      str=`${str}${optionsAddition}${additionSeparator}`;

    }
      return str= str.substr(0, str.length-(additionSeparator.length || 0));
  }
  getStr();
  let separator;
  for(let j=0;j<(options.repeatTimes || 1);j++){
    result=`${result}${str}${separator=(options.separator || '+')}`;
  }
  return result.substr(0, result.length-(separator.length || 0))
}

module.exports = {
  repeater
};
