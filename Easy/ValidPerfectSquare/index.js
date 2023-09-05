//

var isPerfectSquare = function (num) {
  let k;
  for (let i = 1; ; i++) {
    k = i * i;

    if (k > num) {
      k = i - 1;
      break;
    }
  }

  if (k * k == num) return true;
  else return false;
};
