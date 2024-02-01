function goalPaeser(command) {
    return command.replaceAll("()", "o").replaceAll("(al)", "al");
}

const functionResult = goalPaeser("G()(al)");
console.log(functionResult);