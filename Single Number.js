function singleNumber(nums) {
    if (nums.length === 1) return nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return nums[i]
        }
    }
    return null;
}

singleNumber([2, 2, 1])