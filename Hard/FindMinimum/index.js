var findMin = function (nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  return nums[0];
};
