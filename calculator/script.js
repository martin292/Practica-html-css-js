let result = 0;
let leftOperand = '';
let rightOperand = '';
let operator = '';


function add(a, b){
    return a+b;
}

function substract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return (b == 0)? prompt('div by 0') : a/b;
}

function operate(a, operator, b){
    switch(operator){
        case "+": return add(a, b);
        case "-": return substract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: null;
    }
}

//--------------------------------------------------------------------

function addNumber(num){
    (operator == '')? leftOperand+=num : rightOperand+=num;
}

function addOperator(op){
    if(operator == '') {
        operator=op;
    }else if(rightOperand != ''){
        calculate();
        operator=op;
    }
}

function calculate(){
    if(operator != ''){
        result = operate(toNum(leftOperand), operator, toNum(rightOperand));
        leftOperand = result.toString();
        rightOperand = '';
        operator = '';
    }
}

function toNum(num){
    return (num == '')? 0 : +num;
}

function clear(){
    result = 0;
    leftOperand = '';
    rightOperand = '';
    operator = '';
}

function show(){
    console.log('Left operand:  ' + leftOperand);
    console.log('Right operand: ' + rightOperand);
    console.log('Operator: ' + operator);
    console.log('Result: ' + result);
    console.log('');
}

function displayOperand(display){
    (operator == '')? display.textContent = leftOperand : display.textContent = rightOperand;
}

//--------------------------------------------------------------------

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearbtn = document.querySelector('.clear');
const display = document.querySelector('.display');

digits.forEach(btn => btn.addEventListener('click', () => {
    addNumber(btn.textContent);
    displayOperand(display);
}));

operators.forEach(btn => btn.addEventListener('click', () => {
    addOperator(btn.textContent);
    display.textContent = leftOperand;
}));

equal.addEventListener('click', () => {
    calculate();
    displayOperand(display);
});

clearbtn.addEventListener('click', () => {
    clear();
    display.textContent = 0;
});
