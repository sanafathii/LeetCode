//

var reverse = function (x) {
  let k = x;
  let n;
  let number = "";

  if (k == 0) return k;
  if (k > 0) {
    while (k >= 1) {
      n = Math.floor(k % 10);
      k = k / 10;
      number += n;
    }
  } else {
    k = k * -1;
    while (k > 1) {
      n = Math.floor(k % 10);
      k = k / 10;
      number += n;
    }
    number = "-" + number;
  }
  if (number > 2 ** 31 - 1) return 0;
  if (number < (-2) ** 31) return 0;
  return Number(number);
};
