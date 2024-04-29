

var num1;
var operator;
var num2;

operate (10, "+", 12);
operate (10, "-", 12);
operate (10, "*", 12);
operate (10, "/", 12);


// Operate function
function operate (num1, operator, num2) {
    if (operator == "+") {
        add (num1, num2);
    }
    if (operator == "-") {
        subtract (num1, num2);
    }
    if (operator == "*") {
        multiply (num1, num2);
    }
    if (operator == "/") {
        divide (num1, num2);
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


