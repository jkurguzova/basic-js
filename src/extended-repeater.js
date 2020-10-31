const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|';
    if (typeof options.repeatTimes === 'undefined' & typeof options.additionRepeatTimes === 'undefined'){
        return str + options.addition;
    }
    let myStr = '';
    for (i=0; i < options.repeatTimes; ++i) {
      myStr += str;
        for(j=0; j < options.additionRepeatTimes; ++j) {
          if (j+1 === options.additionRepeatTimes) {
            myStr += options.addition
          }else {
            myStr +=options.addition + options.additionSeparator;
          }
          }
          if (i+1 !== options.repeatTimes)
          myStr += options.separator;
        }
    return myStr;

};
