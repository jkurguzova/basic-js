const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let myArr = arr.reduce((acc, val) => acc.concat(val), []);
    let catArr = myArr.filter(item => item == '^^');
    let catsN = catArr.length;

    return catsN;
};
