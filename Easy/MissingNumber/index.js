var missingNumber = function(nums) {
    let max = Math.max(...nums);

    let k;
    for (let i = 0; i < max; i++) {
        if (!nums.includes(i)) return i;
    }

    return max + 1;
};