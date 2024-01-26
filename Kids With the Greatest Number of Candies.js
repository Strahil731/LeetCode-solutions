function greatestNumberCandies(candies, extraCandies) {
    let result = [];
    let isBigkid = true;
    let bigSum = 0;

    for(let i = 0; i < candies.length; i++){
        if(candies[i] >= bigSum){
            bigSum = candies[i];
        }
    }

    for (let i = 0; i < candies.length; i++) {
        let currentEl = Number(candies[i]);
        let currentSum = currentEl + extraCandies;

        if (currentSum >= bigSum) {
            isBigkid = true;
            result.push(isBigkid);
        }
        else {
            isBigkid = false;
            result.push(isBigkid);
        }
    }

    console.log(result);
}

greatestNumberCandies([2, 3, 5, 1, 3], 3)
greatestNumberCandies([4, 2, 1, 1, 2], 1)
greatestNumberCandies([12, 1, 12], 10)
greatestNumberCandies([2, 8, 7], 1)