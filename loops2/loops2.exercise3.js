var a = [4, 2, 2, -1, 6];
var min = a[0];
var index = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        index = i;
    }
}
console.log(min, index);











var a = [4, 2, 2, -1, 6];
var min = 0;
var index = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        min = a[i];
        index = i;
    }
}
console.log(min, index);