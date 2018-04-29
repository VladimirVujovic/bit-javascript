
function letters(a, n) {
    var b = 0;
    if (typeof a !== "string") {
        return "It is not a string";
    } else {
        for (i = 0; i < a.length; i++) {
            if (a[i] === n) {
                b = b + 1;
            }
        }
        return b;
    }
}
var a = 123;
var b = "n";
result = letters(a, b);
console.log(result);
