function subtractProductAndSum(n) {
    let gatheringSum = 0;
    let multipliedSum = 1;
    let difference = 0;

    let stringNumber = n.toString();

    for (let i = 0; i < stringNumber.length; i++) {
        let currentNumer = Number(stringNumber[i]);
        multipliedSum *= currentNumer;
        gatheringSum += currentNumer;
    }

    difference = multipliedSum - gatheringSum;

    return difference;
}

let functionResult = subtractProductAndSum(234);
console.log(functionResult);