var searchInsert = function (nums, target) {
  let index;

  index = nums.indexOf(target);
  if (index < 0 && target < nums[nums.length - 1]) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        return i;
      }
    }
  } else if (index < 0 && target > nums[nums.length - 1]) {
    return nums.length;
  } else {
    return index;
  }
};
