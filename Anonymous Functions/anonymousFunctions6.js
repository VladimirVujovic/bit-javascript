"use strict";


var sum = function () {
    var i;
    var j;
    var sum = 0;
    var even = 0;
    var odd = 0;


    for (i = 0; i < 1001; i++) {
        if (i % 2 === 0) {
            even = even + i;
        }
    }

    for (j = 0; j < 501; j++) {
        if (j % 2 === 1) {
            odd = odd + j;
        }
    }
    var result;
    result = ((even - odd) * 12.5);
    return result
}
console.log(sum());
