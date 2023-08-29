let obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let chrs = s.split("");
  let sum = 0;
  chrs.forEach((item, index) => {});

  for (let i = 0; i < chrs.length; i++) {
    if (chrs[i] == "I" && chrs[i + 1] == "V") {
      sum += 4;
      i++;
    } else if (chrs[i] == "I" && chrs[i + 1] == "X") {
      sum += 9;
      i++;
    } else if (chrs[i] == "X" && chrs[i + 1] == "L") {
      sum += 40;
      i++;
    } else if (chrs[i] == "X" && chrs[i + 1] == "C") {
      sum += 90;
      i++;
    } else if (chrs[i] == "C" && chrs[i + 1] == "D") {
      sum += 400;
      i++;
    } else if (chrs[i] == "C" && chrs[i + 1] == "M") {
      sum += 900;
      i++;
    } else {
      sum += obj[chrs[i]];
    }
  }

  return sum;
};
