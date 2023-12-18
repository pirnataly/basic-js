const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    let dateParse = Date.parse(date);
    let newDate = new Date(dateParse);
    let month = newDate.getMonth();
       if (!date) {
           let err = new SyntaxError('Unable to determine the time of year!');
      throw err;
    }

    if (!(date.toString === Date.prototype.toString)){
      let err = new Error('Invalid date!');
      throw err;
    }

    if (Number.isNaN(dateParse)) {

      let err = new Error('Invalid date!');
      throw err;
    }
    console.log('switch case')
    switch (month) {
      case 0:
      case 1:
      case 11:
        return 'winter';
      case 2:
      case 3:
      case 4:
        return 'spring';
      case 5:
      case 6:
      case 7:
        return 'summer';

      case 8:
      case 9:
      case 10:
        return 'autumn';
    }
    }
    catch(err) {
    if (err.name==='SyntaxError') {
      return (err.message);
    }else {
      throw err;
    }
    try{
      getSeason(date)
    }
    catch(err){
      return err.message;
    }
    }


}
module.exports = {
  getSeason
};
