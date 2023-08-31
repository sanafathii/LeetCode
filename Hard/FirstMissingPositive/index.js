var firstMissingPositive = function (nums) {
  let k = 1;

  while (nums.includes(k)) {
    k++;
  }

  return k;
};
