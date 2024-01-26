function countPairsSum(nums, target) {
    let counter = 0;

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(i < j && nums[i] + nums[j] < target){
                counter++;
            }
        }
    }

    console.log(counter);
}

countPairsSum([-6,2,5,-2,-7,-1,3], -2)