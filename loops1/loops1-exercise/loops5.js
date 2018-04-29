var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var i = 0;
var j = 0;


for (i = 0; i < a.length; i++) {
    for (j = 0; j < 4; j++) {

        console.log(a[i][j]);
    }
}









var a = [
    [1, 2, 1, 24, 1, 5, 4, 6, 8],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var i = 0;
var j = 0;
var c = 0;
var b = 0;


for (i = 0; i < a.length; i++) {
    for (j = 0; j < 9; j++) {
        for (c = 0; c < 4; c++) {
            for (b = 0; b < 4; b++) {

                console.log(a[i][j][c][b]);
            }
        }
    }
}