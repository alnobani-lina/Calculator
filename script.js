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
    if(b == 0){
      
        alert("Division by 0 - > System failure , Auto distruct in 3 seconds !!!");
        clearDisplay();
        
    }
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
let isEqualClicked = false;
let isSecondFilled = false;
let isOpClicked = false;



function clearDisplay() {

    document.getElementById("display").innerHTML = "";
    displayValue = 0;
    firstValue = 0;
    secondValue = 0;
    currentOperator = "NAO";
    firstDigit = true;
    isFirstOp  = true;
    isEqualClicked = false;
    isSecondFilled = false;

}

function numb0() {
    isOpClicked = false;
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
    isOpClicked = false;
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
    isOpClicked = false;
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
    isOpClicked = false;
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
    isOpClicked = false;
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
    isOpClicked = false;
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
    isOpClicked = false;
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
    isOpClicked = false;
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
    isOpClicked = false;
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
    isOpClicked = false;
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
    isEqualClicked = false;
    if(document.getElementById("display").innerHTML == "")
    return;
    if(isOpClicked)
    return;
    if (isFirstOp)
    {
        firstValue = parseFloat(document.getElementById("display").innerHTML);
        currentOperator = "+";
        isFirstOp = false;
        firstDigit = true;
        isSecondFilled = false;
        isOpClicked = true;

    }
    else
    {
        secondValue = parseFloat(document.getElementById("display").innerHTML);
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "+";
        firstDigit = true;
        isFirstOp = false;
        document.getElementById("display").innerHTML = displayValue;
        firstValue = displayValue;
        isSecondFilled = true;
        isOpClicked = true;
    }
}

function sub() {
    isEqualClicked = false;
    if(document.getElementById("display").innerHTML == "")
    return;
    if(isOpClicked)
    return;
    if (isFirstOp)
    {
        firstValue = parseFloat(document.getElementById("display").innerHTML);
        currentOperator = "-";
        isFirstOp = false;
        firstDigit = true;
        isSecondFilled = false;
        isOpClicked = true;
    }
    else
    {
        secondValue = parseFloat(document.getElementById("display").innerHTML);
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "-";
        firstDigit = true;
        isFirstOp = false;
        document.getElementById("display").innerHTML = displayValue;
        firstValue = displayValue;
        isSecondFilled = true;
        isOpClicked = true;
    }
}

function multi() {
    isEqualClicked = false;
    if(isOpClicked)
       return;
    if(document.getElementById("display").innerHTML == "")
        return;
    if (isFirstOp)
    {
        firstValue = parseFloat(document.getElementById("display").innerHTML);
        currentOperator = "*";
        isFirstOp = false;
        firstDigit = true;
        isSecondFilled = false;
        isOpClicked = true;
    }
    else
    {
        secondValue = parseFloat(document.getElementById("display").innerHTML);
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "*";
        firstDigit = true;
        isFirstOp = false;
        document.getElementById("display").innerHTML = displayValue;
        firstValue = displayValue;
        isSecondFilled = true;
        isOpClicked = true;
    }
}

function equal() {
    
    if(!isFirstOp)
    isSecondFilled = true;
    if (document.getElementById("display").innerHTML == "")
        return;
    if (!isEqualClicked && isSecondFilled && isOpClicked == false){
        
        secondValue = parseFloat(document.getElementById("display").innerHTML);
        if(secondValue == 0){
            alert("Division by 0 - > System failure , Auto distruct in 3 seconds !!!");
            clearDisplay();
            return;
        }
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "NAO";
        firstDigit = true;
        isFirstOp = true;
        secondValue = 0;
        firstValue = displayValue;
        document.getElementById("display").innerHTML = displayValue;
        isEqualClicked = true;
        isSecondFilled = true;
        
    }
}

function dici() {
    console.log(document.getElementById("display").innerHTML);
    if ( firstDigit)
    {
         document.getElementById("display").innerHTML = "0."
         firstDigit = false;
    }
    else if (!(document.getElementById("display").innerHTML.includes(".")))
         document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + ".";
}

function div() {
    isEqualClicked = false;
    if(document.getElementById("display").innerHTML == "")
    return;
    if(isOpClicked)
    return;
    if (isFirstOp)
    {
        firstValue = parseFloat(document.getElementById("display").innerHTML);
        currentOperator = "/";
        isFirstOp = false;
        firstDigit = true;
        isSecondFilled = false;
        isOpClicked = true;
    }
    else
    {
        secondValue = parseFloat(document.getElementById("display").innerHTML);
        displayValue = operate(currentOperator , firstValue , secondValue);
        currentOperator = "/";
        firstDigit = true;
        isFirstOp = false;
        document.getElementById("display").innerHTML = displayValue;
        firstValue = displayValue;
        isSecondFilled = true;
        isOpClicked = true;
    }
}

function backspaceButton()
{
    
    let value = document.getElementById("display").innerHTML;
    if(value.length == 1)
    document.getElementById("display").innerHTML = "";
    else
    {
    console.log(value);
    value = value.substring(0 , value.length - 1);
    console.log(value);
    document.getElementById("display").innerHTML = value;
    }
}




document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if  (event.key == 0)
        numb0();
    else if (event.key == 1)
        numb1();
    else if (event.key == 2)
        numb2(); 
        else if (event.key == 3)
        numb3();
    else if (event.key == 4)
        numb4(); 
        else if (event.key == 5)
        numb5();
    else if (event.key == 6)
        numb6(); 
        else if (event.key == 7)
        numb7();
    else if (event.key == 8)
        numb8();           
    else if (event.key == 9)
        numb9(); 
    else if (event.key == "+")
        add2();
    else if (event.key == "-")
        sub(); 
        else if (event.key == "*")
        multi();
    else if (event.key == "/")
        div();
    else if (event.key == "=" || event.key == "Enter")
        equal();
    else if (event.key == ".")
        dici(); 
    else if(event.key == "Backspace")
        backspaceButton();
    else if (event.key == "Delete")
        clearDisplay();
                                   
});