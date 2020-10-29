const CustomError = require("../extensions/custom-error");

const chainMaker = {
  link: [],

  getLength() {
    this.link.length();
    return this;

  },
  addLink(value) {
    this.link.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!position || !Number.isInteger(position) || this.link.length<position || position < 0) {
      this.link = [];
      throw new Error();
    } else {
      this.link.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    let myChain = this.link.join('~~');
    this.link = [];
    return myChain;
  }

};

module.exports = chainMaker;
