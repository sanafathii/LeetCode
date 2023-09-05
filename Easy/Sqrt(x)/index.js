//

var mySqrt = function (x) {
  let k;
  for (let i = 1; ; i++) {
    k = i * i;

    if (k > x) {
      k = i - 1;
      break;
    }
  }
  return k;
};
