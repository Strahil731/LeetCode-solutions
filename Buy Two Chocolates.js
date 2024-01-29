function buyTwoChocolates(prices, money) {
    prices = prices.sort((a, b) => a - b);
    a = prices[0];
    b = prices[1];
    var sum = a + b;
    if (money < sum) {
        return money;
    }
    return money - sum;
}

let functionResult = buyTwoChocolates([3, 2, 3], 3);
console.log(functionResult);