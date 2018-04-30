var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var b = [];


for (i = 0, j = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[j] = a[i];
        j++;
    }
}
console.log(b)

// second way how task-9 (nine)  can be done 


var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var b = [];
var j = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[j] = a[i];
        j++
    }
}
console.log(b)