function odd(a) {
    var sum = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            sum = sum + a[i];
        }
    }
    return sum
}
var b = [5, 10, 5, 10, 50, 55];

console.log(odd(b));