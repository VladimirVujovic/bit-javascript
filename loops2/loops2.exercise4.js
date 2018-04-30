var a = [4, 2, 8, 9, 6];
var min = a[0];
var sec;

for (var i = 1; i < a.length; i++) {
    if (min > a[i]) {
        min = a[i];
    }
}
if (min == a[0]) {
    sec = a[1]
} else {
    sec = a[0]
}
for (var i = 1; i < a.length; i++) {
    if (a[i] != min && a[i] < sec) {
        sec = a[i];
    }
}

console.log(sec);