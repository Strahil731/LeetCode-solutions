function shuffle(nums, n) {
    let arrayX = [];
    let arrayY = [];
    let result = [];

    for (let i = 0; i < n; i++) {
        let currentEl = nums.shift();
        arrayX.push(currentEl);
    }

    for (let i = 0; i < nums.length; i++) {
        let currentEl = nums[i];
        arrayY.push(currentEl);
    }

    for (let i = 0; i < arrayX.length; i++) {
        result.push(arrayX[i]);
        result.push(arrayY[i]);
    }

    return result;
}

let functionResult = shuffle([2, 5, 1, 3, 4, 7], 3);
console.log(functionResult);