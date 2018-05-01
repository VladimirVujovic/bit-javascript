var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
j = 0;

for (var i = 0; i < a.length; i++) {
    c[j] = a[i];
    j++;
    c[j] = b[i];
    j++;

}
console.log(c);









var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var j = 0;

for (var i = 0; i < a.length; i++) {
    c[j++] = a[i];
    c[j++] = b[i];
}
console.log(c);