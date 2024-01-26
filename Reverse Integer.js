function reverseInteger(x) {
    let bit = Math.pow(2, 31) - 1
    let rev = x.toString().split('').reverse().join('')
    let result = parseInt(rev)

    if (result > (bit) || result < -(bit)) {
        console.log(0);
    }

    if (x < 0) {
        console.log(-result);
    } else {
        console.log(result);
    }
}

reverseInteger(-2147483412)