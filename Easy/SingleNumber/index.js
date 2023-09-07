var singleNumber = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] != nums[j]) k++;
        }
        if (k == nums.length - 1) return nums[i];
        else k = 0;
    }
};