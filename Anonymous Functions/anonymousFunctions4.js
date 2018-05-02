"use strict";

var a = [13, 11, 15, 5, 6, 1, 8, 12];

var newArray = function (a) {

    var b = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (a[j] > a[i]) {
                var temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        }
    }
    for (i = 0; i < a.length; i++) {
        b[i] = a[i] * 2;

    }
    return b;
}
console.log(newArray(a));






