var odd = [2, 5, 7, 9, 15, 2];
var sum = 0;
var i = 0;

while (i < odd.length) {
    if (odd[i] % 2 !== 0) {
        sum = sum + odd[i];
    }

    i++;


}
console.log(sum)