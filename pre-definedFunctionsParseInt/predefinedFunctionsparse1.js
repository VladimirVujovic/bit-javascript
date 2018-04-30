var array = ["1", "dadasda", "21", undefined, "42", "1e+3", Infinity];


function f(array) {
    var b = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        var result = parseInt(array[i]);
        if (!isNaN(result)) {
            b[j] = result;
            j++;
        }
    }

    return b;
}
console.log(f(array));