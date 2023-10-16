var search = function (nums, target) {
  let low = 0;
  let height = nums.length - 1;
  let mid;
  let guess;

  while (low <= height) {
    mid = Math.ceil((low + height) / 2);
    guess = nums[mid];

    if (guess === target) {
      return mid;
    } else {
      if (target > guess) low = mid + 1;
      else height = mid - 1;
    }
  }
  return -1;
};
