var a = [3, 500, 12, 149, 53, 414, 1, 19];

var minMax = function (a) {
    min = a[0];
    max = a[0];
    var i;
    var j;
    var positionmax = 0;
    var positionmin = 0;

    for (i = 1, j = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            positionmin = i;
        }

        if (a[i] > max) {
            max = a[i];
            positionmax = i;
        }
    }

    temp = a[positionmin];
    a[positionmin] = a[positionmax];
    a[positionmax] = temp;




    return a
}
console.log(minMax(a));