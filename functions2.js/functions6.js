var a = "My random string";
var b = "r";


function lastLetter(a, b) {
    for (var i = a.length; i > 0; i--) {
        if (a[i] === b) {
            return i + 1;
        }
    }
    return -1
}

var result = lastLetter(a, b);

console.log(result);