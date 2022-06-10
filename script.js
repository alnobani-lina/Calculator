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

let displayValue = 0;
let firstValue = 0;
let secondValue = 0;
let currentOperator = "NAO";
let firstDigit = true;
let isFirstOp  = true;





function numb0() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "0";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "0";
    }
}

function numb1() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "1";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "1";
    }
}

function numb2() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "2";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "2";
    }
}

function numb3() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "3";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "3";
    }
}
function numb4() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "4";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "4";
    }
}

function numb5() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "5";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "5";
    }
}

function numb6() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "6";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "6";
    }
}
function numb7() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";
    }
}

function numb8() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "8";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "8";
    }
}

function numb9() {
    if (firstDigit)
    {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "9";
        firstDigit = false;
    }
    else
    {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "9";
    }
}

function add2() {
    if (isFirstOp)
    {
        firstValue = parseInt(document.getElementById("display").innerHTML);
        currentOperator = "+";
        isFirstOp = false;
        firstDigit = true;
    }
    else
    {
        secondValue = parseInt(document.getElementById("display").innerHTML);
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "+";
        firstDigit = true;
        isFirstOp = false;
        document.getElementById("display").innerHTML = displayValue;
        firstValue = displayValue;
    }
}

function sub() {
    if (isFirstOp)
    {
        firstValue = parseInt(document.getElementById("display").innerHTML);
        currentOperator = "-";
        isFirstOp = false;
        firstDigit = true;
    }
    else
    {
        secondValue = parseInt(document.getElementById("display").innerHTML);
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "-";
        firstDigit = true;
        isFirstOp = false;
        document.getElementById("display").innerHTML = displayValue;
        firstValue = displayValue;
    }
}

function multi() {
    if (isFirstOp)
    {
        firstValue = parseInt(document.getElementById("display").innerHTML);
        currentOperator = "*";
        isFirstOp = false;
        firstDigit = true;
    }
    else
    {
        secondValue = parseInt(document.getElementById("display").innerHTML);
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "*";
        firstDigit = true;
        isFirstOp = false;
        document.getElementById("display").innerHTML = displayValue;
        firstValue = displayValue;
    }
}

function equal() {
    //document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "=";
}

function dici() {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + ".";
}

function div() {
    if (isFirstOp)
    {
        firstValue = parseInt(document.getElementById("display").innerHTML);
        currentOperator = "/";
        isFirstOp = false;
        firstDigit = true;
    }
    else
    {
        secondValue = parseInt(document.getElementById("display").innerHTML);
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "/";
        firstDigit = true;
        isFirstOp = false;
        document.getElementById("display").innerHTML = displayValue;
        firstValue = displayValue;
    }
}





function clear() {
    document.getElementById("display").innerHTML = 0;
}