var a = [3, 11, -5, -3, 2];

var sum = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i];
    }

}
console.log(sum);











var a = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i];
    }
}
console.log(sum);