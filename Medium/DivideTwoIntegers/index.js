var divide = function (dividend, divisor) {
  if (divisor !== 0) {
    if (dividend > 2 ** 31 - 1) {
      return 2 ** 31 - 1;
    } else if (dividend < (-2) ** 31) {
      return (-2) ** 31 * -1;
    } else if (dividend < 0 && divisor < 0) {
      if (divisor == -1 && dividend == -1) return 1;
      else if (divisor == -1) return (dividend + 1) * -1;
      else return Math.floor(dividend / divisor);
    } else if (divisor < 0 || dividend < 0) {
      if (dividend / divisor > -1 && dividend / divisor < 0) return 0;
      else return Math.ceil(dividend / divisor);
    } else {
      return Math.floor(dividend / divisor);
    }
  }
};
