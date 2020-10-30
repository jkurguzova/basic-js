const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options = {
    link: [],

    repeatTimes() {
      this.();
      return this;
    },

    separator() {
      this.();
      return this;
    },

    addition() {
      this.();
      return this;
    },

    additionRepeatTimes() {
      this.();
      return this;
    },

    additionSeparator() {
      this.();
      return this;
    },

  }

};
