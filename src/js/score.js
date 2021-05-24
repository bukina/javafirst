"use strict";

let sky = prompt('color of sky? 1 - blue 2 - green 3 - red');
let color = prompt('opposite color to black? 1 - white 2 - yellow 3 - red');
let leaf = prompt('color of leaf? 1 - red 2 - white 3 - green');
let score = 0;
if (sky == 1) {
    score += 2;
} if (color == 1) {
    score += 2;
} if (leaf == 3) {
    score += 2;
}
alert('Your score is ' + score);