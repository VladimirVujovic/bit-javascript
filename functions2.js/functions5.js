var a = "My random string";
var b = "x";

function firstLetter(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return i + 1;
        }
    }

    return -1;
}

var result = firstLetter(a, b);

console.log(result);

