function createCounter(init) {
    let num = init;


    return {
        increment: () => {
            num++;
            return num;
        },
        reset: () => {
            num = init;
            return num;
        },
        decrement: () => {
            num--;
            return num;
        }
    }
};

let functionResult = createCounter(5);
console.log(functionResult);