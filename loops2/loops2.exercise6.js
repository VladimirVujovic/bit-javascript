var a = [2, 4, -2, 7, -2, 4, 2];
var isSymmetric = true;

for (i = 0, j = a.length - 1; i < a.length, j > 0; i++ , j--) {
    if (a[i] !== a[j]) {
        isSymmetric = false;
    }
}

console.log(isSymmetric);











var a = [2, 4, -2, 7, -2, 4, 15];
var symetric = true;

for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length - 1; j--) {
        if (a[i] === a[j]) {
            symetric = false;

        }
    }
}
console.log(symetric);