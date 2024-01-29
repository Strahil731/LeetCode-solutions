function createHelloWord(){
    return function(...args) {
        return "Hello World";
    }
}

let functionResult = createHelloWord();
console.log(functionResult());