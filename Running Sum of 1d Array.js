function runningSumArray(nums) {
    let result = [];
    let sum = 0;

    for (const el of nums) {
        sum += el;
        result.push(sum);
    }

    return result;
}

const functionResult = runningSumArray([1, 1, 1, 1, 1])
console.log(functionResult);