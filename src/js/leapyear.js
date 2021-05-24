"use strict";



let message;

let year = +prompt('write a year');

if (year % 4 != 0 || year % 100 == 0 && year % 400 != 0) {
    alert('no leap-year');
} else {
    alert('leap year');
}


alert(message);