const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error();
  } else if (arr == [] || arr == Infinity) {
    let newArr;
    return newArr = [];
  } else {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--discard-next') {
        if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
          i++;
        }
        i++;
      } else if (arr[i] == '--discard-prev') {
        if (i !== 0) {
          newArr.pop();
        }
      } else if (arr[i] == '--double-next') {
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
      } else if (arr[i] == '--double-prev') {
        if (i !== 0) {
          newArr.push(arr[i - 1]);
        }
      } else {
        newArr.push(arr[i]);
      }
    }
    newArr = newArr.filter(function (el) {
      return el !== undefined && el !== "" && el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev';
    });

    return newArr;
  }

};
