document.addEventListener('DOMContentLoaded', function () {
    const numberButtons = document.querySelectorAll('.number');
    const functionButtons = document.querySelectorAll('.functionButton button');
    const equalButton = document.getElementById('equalButton');
    const clearButton = document.getElementById('clearButton');
    const display = document.getElementById('display');
    
    let currentOperation = null;
    let firstOperand = null;
    let secondOperand = null;
    let shouldResetScreen = false;

    numberButtons.forEach(button => {
        button.addEventListener('click', () => appendNumber(button.value));
    })

})


operate (10, "+", 12);
operate (10, "-", 12);
operate (10, "*", 12);
operate (10, "/", 12);


// Operate function
function operate (num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Basic Mathematic Functions
function add (num1, num2) {
    console.log(num1+num2);
}

function subtract (num1, num2) {
    console.log(num1-num2);
}

function multiply (num1, num2) {
    console.log(num1*num2);
}

function divide (num1, num2) {
    console.log(num1/num2);
}


