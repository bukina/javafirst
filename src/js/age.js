"use strict";




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
