function maximumNumberWords(sentences) {
    let maxLength = 0;

    for (let i = 0; i < sentences.length; i++) {
        let currentEl = sentences[i].split(" ");

        if (currentEl.length >= maxLength) {
            maxLength = currentEl.length;
        }
    }

    return maxLength;
}

const functionResult = maximumNumberWords(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
console.log(functionResult);