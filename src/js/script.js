"use strict";

/* 1


let age = +prompt('How old are you?');
if (age <= 12) {
    alert('baby');
} else if (age > 12 && age <= 18) {
    alert('teenager');
} else if (age > 18 && age <= 60) {
    alert('adult');
} else if (age > 60) {
    alert('senior');
}
*/


/*  2

let message;

let number = prompt('write a number');

message = number == '0' ? ')' :
    number == '1' ? '!' :
        number == '2' ? '@' :
            number == '3' ? '#' :
                number == '4' ? '$' :
                    number == '5' ? '%' :
                        number == '6' ? '^' :
                            number == '7' ? '&' :
                                number == '8' ? '*' :
                                    number == '9' ? '(' : '';

alert(message); */



/* 3


let number = +prompt('write number of threes');

let number1 = (number - number % 100) / 100;
let number2 = (number - number % 10) / 10 - number1 * 10;
let number3 = number1 - number1 * 100 - number2 * 10;

if (number1 == number2 || number1 == number3 || number2 == number3) {
    alert('numbers repeat');
} else {
    alert('numbers do not repeat');
}  */



/* 4


let message;

let year = +prompt('write a year');

if (year % 4 != 0 || year % 100 == 0 && year % 400 != 0) {
    alert('no leap-year');
} else {
    alert('leap year');
}


alert(message); */


/*
5

let b;
let c;
let e;
let a = +prompt("Введите пятизначное число", "")
if ((a > 9999) && (a < 100000)) {
    b = a / 10000;
    a = a % 10000;
    c = a / 1000;
    a = a % 1000;
    a = a % 100;
    e = a / 10;
    a = a % 10;

    if ((b == a) && (c == e)) {
        alert("Это число палиндром");
    }
    else {
        alert("Это число не палиндром");
    }
}
else {
    alert("Вы ввели не пятизначное");
}

*/

/*
let num = +prompt("write 5-digit number");
if (num === num.split("").reverse().join("")) {
    alert("Number palindrome");
} else {
    alert("Number not palindrome");
}
*/

// 123 - not palendrome
// 111 - palendrome 



/* 6

let summa = prompt('write sum in dollars');

let euro = 0.82;
let uano = 6.43;
let azno = 1.70;
let eur = summa * euro;
let uan = summa * uano;
let azn = summa * azno;

alert('sum in euro: ' + eur + "\nsum in uan: " + uan + "\nsum in azn: " + azn); */


