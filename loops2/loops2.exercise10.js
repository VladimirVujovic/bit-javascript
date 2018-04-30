var a = [2, -2, 33, 12, 5, 8];
var b = [];
var e = 78;
var p = 3;

if (p > a.length) {
    console.log("Error");
} else {
    for (var i = 0; i <= p; i++) {
        if (i != p) {
            b[i] = a[i];
        } else {
            b[i] = e;
        }
    }
    for (i = p + 1, j = p; i <= a.length; i++, j++) {
        b[i] = a[j]

    }
    console.log(b);
}