var e = 3,
    var a = [7, 8, 9, 3, 1, 2, 22, 5];

var i = o;
var ind = false;

while (i < a.length) {
    if (a[i] == e) {
        console.log("Element is here!");
        ind = true;
        break;
    }
    i++;
}
if (ind == a.length) {
    console.log("Element is not here ")
}




var i = 0;
for (i = 0; i < 5; i++) {

    if (i == 2) {
        continue;
    }
    console.log(i);
}


var i = 0;

do {

    console.log(i);
    i++;
} while (i < 5);


var i = 0;
for (i = 0; i < 5; i++) {
    console.log(i);
}



var a = [0, 5, 6, 8, 5, 4, 10, 5];
var sum = 0;
var i = 0;


do {
    if (a[i] % 2 == 0 && i % 2 == 1) {
        sum = sum + a[i];
    }

    i++;
} while (i < a.length);


console.log(sum)





var a = [0, 5, 6, 8, 5, 4, 10, 5];
var sum = 0;

for (var i = 0; i < a.length; i++) {

    if (a[i] % 2 === 0 && i % 2 === 1) {
        sum = sum + a[i];
    }
}
console.log(sum);