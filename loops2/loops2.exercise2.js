var a = [-3, 11, 5, 3.4, -8];


for (var i = 0; i < a.length; i++) {
    if (a[i] >= 0) {
        a[i] = a[i] * 2;
    }
}
console.log(a);







var a = [-3, 11, 5, 3.4, -8];
var multiple = 1;

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i] * 2;
    }
}
console.log(a);