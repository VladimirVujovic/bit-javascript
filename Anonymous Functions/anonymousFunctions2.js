var f = [3, 500, -10, 149, 53, 414, 1, 19];

var addition = function (a) {
    for (i = 0; i < a.length; i++) {
        if ((a[i] / 2) + 5 === 0) {
            a[i] = 20;
        } else {
            a[i] = ((a[i] / 2 + 5));

        }

    }
    return a;


}
var result = addition(f);

console.log(result);