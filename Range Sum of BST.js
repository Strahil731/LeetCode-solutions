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

function rangeSumBST1(root, low, high) {
    if (!root) {
        return 0;
    }

    const currentVal = (root.val >= low && root.val <= high) ? root.val : 0;

    const leftSum = rangeSumBST(root.left, low, high);
    const rightSum = rangeSumBST(root.right, low, high);

    return currentVal + leftSum + rightSum;
}

rangeSumBST1([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10)