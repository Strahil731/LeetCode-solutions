function scoreOfString(s) {
    let sum = 0;

    for (let i = 0; i < s.length - 1; i++) {
        let currentEl = s[i].charCodeAt();
        let nextEl = s[i + 1].charCodeAt();
        let difference = currentEl - nextEl;

        sum += Math.abs(difference);
    }

    console.log(sum);
}

scoreOfString("zaz")