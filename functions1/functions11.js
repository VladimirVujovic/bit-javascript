function concat(str, num) {
    var resStr = ""
    for (var i = 0; i < num; i++) {

        resStr += str
    }
    return resStr
}

var someStr = "abc"
var randNum = 5

console.log(concat(someStr, randNum))