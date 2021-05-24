"use strict";




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

alert(message);