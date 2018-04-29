var word = 5;

var result = isString(word);

function isString(s) {
    // true if s is sting
    //  false if s in not string

    if (typeof s == "string") {
        return true;
    } else {
        return false;
    }
}


if (result == true) {
    console.log("It is string!");
} else {

    console.log("It is not string");
}
