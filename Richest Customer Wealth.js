function maximumWealth(accounts) {
    let bigNum = 0;
    let sum = 0;

    for (let i of accounts) {
        sum = 0;
        for (let el of i) {
            sum += el;
        }
        if (sum > bigNum) {
            bigNum = sum;
        }
    }

    console.log(bigNum);
}

maximumWealth(
    [
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5]
    ]
)