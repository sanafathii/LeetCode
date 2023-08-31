var searchRange = function (nums, target) {
  let k = [];
  nums.forEach((element, index) => {
    if (element == target) k.push(index);
  });
  let ret = [k[0], k[k.length - 1]];
  ret.forEach((item, index) => {
    if (typeof item == "undefined") {
      item = -1;
      ret[index] = item;
    }
  });
  return ret;
};
