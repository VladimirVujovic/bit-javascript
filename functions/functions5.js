var i;
var j;

var n = 5;

for (i = 0; i < n; i++) {

    if (i == 0 || i == n - 1) {
        // we print n stars
        var stars = "";
        for (j = 0; j < n; j++) {
            stars = stars + "*";
        }
        console.log(stars);
    } else {
        var line = "";;
        // stars
        line = line + "*";
        // n-2 blank
        for (j = 1; j <= n - 2; j++) {
            line = line + " ";
        }
        // stars
        line = line + "*";

        console.log(line);


    }
}