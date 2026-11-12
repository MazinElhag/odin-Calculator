
// 1. Mathematical functionsa

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


// 2. Operate function

function operate(operator, a, b) {
    switch(operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
    
}


// 3. Calculator variables

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;


// 4. DOM elements

const display = document.querySelector("#display");

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");


// 5. Display function

function updateDisplay() {
   if(secondNumber !== ""){
    display.textContent = secondNumber;
   }
   else {
    display.textContent = firstNumber;
   }
}


// 6. Digit input

function inputDigit(digit) {
    if(currentOperator !== null){
        secondNumber = secondNumber + digit;
    }
    else {
        firstNumber = firstNumber + digit;
    }
    updateDisplay()
}


// 7. Operator input

function inputOperator(operator) {
    if(secondNumber == "") {
        currentOperator = operator;
    }
    else {
        calculate();
        currentOperator = operator;
    }
        
}


// 8. Calculate result

function calculate() {
    if((firstNumber !== "" && secondNumber !== "") && currentOperator !== null) {
        firstNumber = operate(currentOperator, Number(firstNumber), Number(secondNumber));
        secondNumber = ""
        updateDisplay()
    }
}


// 9. Clear calculator

function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    updateDisplay();
}


// 10. Delete last digit

function deleteDigit() {
    if(secondNumber !== ""){
       secondNumber = secondNumber.slice(0, -1);
    }
    else {
        firstNumber = firstNumber.slice(0, -1);
    }
    updateDisplay();
}

function decimal(){
    if(currentOperator !== null){
        if(!secondNumber.includes("."))
            secondNumber = secondNumber + ".";
    }
    else {
        if(!firstNumber.includes("."))
            firstNumber = firstNumber + ".";
    }
    updateDisplay();
}

// 11. Event listeners

// Digit buttons
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        inputDigit(button.dataset.number);
    });
});
// Operator buttons
operatorButtons.forEach(operateor =>{
    operateor.addEventListener("click", () =>{
        inputOperator(operateor.dataset.operator);
    });
});
// Equals button
equalsButton.addEventListener("click", () => {
    calculate();
});
// Clear button
clearButton.addEventListener("click", () => {
    clearCalculator();
});
// Delete button
deleteButton.addEventListener("click", () => {
    deleteDigit();
});
// Decimal button
decimalButton.addEventListener("click", () =>{
    decimal();
});