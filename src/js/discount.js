"use strict";

let discount;
let price = +prompt('write your price');
if (price >= 200 && price < 300) {
    alert(price - (price * 3 / 100));
} else if (price >= 300 && price < 500) {
    alert(price - (price * 5 / 100));
} else if (price >= 500) {
    alert(price - (price * 7 / 100));
}

alert(discount);