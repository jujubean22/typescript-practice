"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const firstString = (0, readline_sync_1.question)('Enter first number: \n');
    const operator = (0, readline_sync_1.question)('Enter operator: \n');
    const secondString = (0, readline_sync_1.question)('Enter second number: \n');
    const validInput = isNumber(firstString) && isOperator(operator) && isNumber(secondString);
    if (validInput) {
        const firstNum = parseInt(firstString);
        const secondNum = parseInt(secondString);
        const result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\n Enter a valid input\n');
        main();
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
function calculate(firstNum, operator, secondNum) {
    if (operator === '*') {
        return firstNum * secondNum;
    }
    if (operator === '/') {
        return firstNum / secondNum;
    }
    if (operator === '+') {
        return firstNum + secondNum;
    }
    if (operator === '-') {
        return firstNum - secondNum;
    }
}
function isOperator(operator) {
    if (operator === '*' || operator === '/' || operator === '+' || operator === '-') {
        return true;
    }
    else
        return false;
}
main();
