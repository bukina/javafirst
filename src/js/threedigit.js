"use strict";





let number = +prompt('write number of threes');

let number1 = (number - number % 100) / 100;
let number2 = (number - number % 10) / 10 - number1 * 10;
let number3 = number1 - number1 * 100 - number2 * 10;

if (number1 == number2 || number1 == number3 || number2 == number3) {
    alert('numbers repeat');
} else {
    alert('numbers do not repeat');
}