function sumofodds(arr) {
    var sum = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            sum = sum + arr[i]
        }
    }

    return sum

}
testArr = [3, 4, 77, 100, 150, 9, 55, 45, 22]

console.log(sumofodds(testArr))



function sum