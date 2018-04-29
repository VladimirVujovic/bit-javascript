var x = ["1", "A", "B", "c", "r", "true", true, NaN, undefined];
var b = "";

for (i = 0; i < x.length; i++) {
    b = b + x[i];
}
console.log(b);