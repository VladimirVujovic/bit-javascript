function numOfApp(str) {
    var numOfass = 0 // :D  anyways this is other part of task

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            numOfass++;
        }

        if (str[i] === "A") {
            numOfass++;
        }
    }
    return numOfass;
}



str = "raaaandomStraadfadadfainAAng";

console.log(numOfApp(str))