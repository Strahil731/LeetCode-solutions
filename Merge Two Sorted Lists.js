function mergeTwoList(list1, list2) {
    let result = [];

    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i]);
    }

    for (let i = 0; i < list2.length; i++) {
        result.push(list2[i]);
    }

    if (result.length !== 0) {
        console.log(result.sort((a,b) => a - b));
    }
    else {
        console.log('[]');
    }
}

mergeTwoList([1, 2, 4], [1, 3, 4])