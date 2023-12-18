const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.machinetype = (bool === true) ? 'direct' : 'reverse';
    this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
      'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
      'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  encrypt(string, key) {
    let k = 0;
    let strindex;
    let keyindex;
    let encryptedString = '';
    if (string == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      this.string = (this.machinetype === 'direct') ? string : [...string].reverse().join('');
      this.key = (this.machinetype === 'direct') ? key : [...key].reverse().join('');
      while (this.key.length < this.string.length) {
        this.key = this.key + key;
      }
      for (let j = 0; j < this.string.length; j += 1) {
        if (this.letters.includes(this.string[j])) {
          strindex = this.letters.findIndex((elem) => elem === this.string[j]);
          keyindex = this.letters.findIndex((elem) => elem === this.key[j - k]);
          let newCode = (strindex + keyindex) > 51 ? strindex + keyindex - 52 : strindex + keyindex;
          encryptedString += this.letters[newCode];
        } else {
          k++;
          encryptedString += this.string[j];
        }
      }
      return encryptedString.toUpperCase();
    }
  }

  decrypt(decryptString, decryptKey) {
    let k = 0;
    let strindex;
    let keyindex;
    let encryptedString = '';
    if (decryptString == undefined || decryptKey == undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      this.decryptString = (this.machinetype === 'direct') ? decryptString : [...decryptString].reverse().join('');
      this.decryptKey = (this.machinetype === 'direct') ? decryptKey : [...decryptKey].reverse().join('');
      while (this.decryptKey.length < this.decryptString.length) {
        this.decryptKey = this.decryptKey + decryptKey;
      }
      for (let j = 0; j < this.decryptString.length; j += 1) {
        if (this.letters.includes(this.decryptString[j])) {
          strindex = this.letters.findIndex((elem) => elem === this.decryptString[j]);
          keyindex = this.letters.findIndex((elem) => elem === this.decryptKey[j - k]);
          let newCode = (strindex - keyindex) <0 ? strindex - keyindex + 52 : strindex - keyindex;
          encryptedString += this.letters[newCode];
        } else {
          k++;
          encryptedString += this.decryptString[j];
        }}
      return encryptedString.toUpperCase();
    }
  }
}
module.exports = {
  VigenereCipheringMachine
};
