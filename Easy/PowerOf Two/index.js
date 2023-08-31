var isPowerOfTwo = function (n) {
  n = Math.log2(n);

  if (Number.isInteger(n)) return true;
  else return false;
};
