function rangeSumBST(root, low, high) {
    let sum = 0;

    root.forEach((element) => {
        if (element === null) {
            return;
        }

        if (element >= low && element <= high) {
            sum += element;
        }
    });

    console.log(sum);
}

rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10)