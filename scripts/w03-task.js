/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1,number2){
    return number1 + number2;
}

function addNumbers() {
    let addend1 = Number(document.querySelector('#add1').value);
    let addend2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addend1, addend2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);



/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function(){
    let substract1 = Number(document.querySelector('#subtract1').value);
    let substract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(substract1, substract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let discount = document.getElementById('member').checked ? 0.2 : 0;
    let totalDue = subtotal - (subtotal*discount);
    document.getElementById('total').textContent = `$${totalDue.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

//document.querySelector('#array').textContent = numbers;
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);