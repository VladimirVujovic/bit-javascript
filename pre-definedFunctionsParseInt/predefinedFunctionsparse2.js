var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function skip(array) {
    var b = "";

    for (var i = 0, j = 0; i < array.length; i++) {
        var result = parseFloat(array[i]);
        if (!isNaN(result)) {
            b = b + result;
        }

    }
    return b;
}
console.log(skip(array));