"use strict"

var names = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var grades = [50, 39, 63, 72, 99, 51, 83, 59];
var i;
var result;


var correspodinggrade = function (names, grades) {



    var scores = [];
    for (i = 0; i < names.length; i++) {
        if (grades[i] <= 50) {
            scores[i] = 5;
        }
        else if (grades[i] < 60) {
            scores[i] = 6;
        }
        else if (grades[i] < 70) {
            scores[i] = 7;
        }
        else if (grades[i] < 80) {
            scores[i] = 8;
        }
        else if (grades[i] < 90) {
            scores[i] = 9;
        }
        else if (grades[i] < 100) {
            scores[i] = 10;
        }

        console.log(names[i] + ' aquared ' + grades[i] + ' andearned ' + scores[i]);
        //break ili return

    }

    ////.... <--- break 

    //return undefined;
}


///<-- return 
result = correspodinggrade(names, grades);
//console.log(result);











































































