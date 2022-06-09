function add(a, b) {
return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(divide(4, 2));

function operate(operator, number1, number2) {
    
    if(operator == "+")
       return add(number1, number2);
    else if(operator == "-")
        return subtract(number1, number2);
    else if(operator == "*")
       return multiply(number1, number2);
    else
       return divide(number1, number2);
}

console.log(operate("+", 1, 4));

//let disply = document.getElementById("display");
let num7 = document.getElementById("num7");

function numb7() {
    document.getElementById("disply").innerHTML = 7;
}

function numb8() {
    document.getElementById("disply").innerHTML = 8;
}

function numb9() {
    document.getElementById("disply").innerHTML = 9;
}

function multi() {
    document.getElementById("disply").innerHTML = "*";
}