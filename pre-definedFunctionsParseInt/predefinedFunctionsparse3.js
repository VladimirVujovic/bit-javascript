var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];


function filter(array) {
    var b = [];


    for (var i = 0, j = 0; i < array.length; i++) {
        if (array[i]) {
            b[j] = array[i];
            j++
        }
    }
    return b
}
console.log(filter(array));
