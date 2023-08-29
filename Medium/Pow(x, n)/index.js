//
/* Solution without using Math.pow()*/

var myPow = function (x, n) {
  let plate = 1;
  let k;
  if (x == 1) return 1;
  if (x == -1 && n < 0) {
    if (n % 2 == 0) return 1;
    else return -1;
  }

  if (n < 0) {
    k = n * -1;
    for (let i = 0; i < k; i++) {
      plate *= x;
    }

    plate = 1 / plate;

    return plate.toFixed(5);
  } else {
    for (let i = 0; i < n; i++) {
      plate *= x;
    }

    return plate.toFixed(5);
  }
};
