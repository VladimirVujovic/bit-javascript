"use strict";

var replaces = function(a) {
  var i;
  var counter = 0;
  var output = "";

  for (i = 0; i < a.length; i++) {
    if (a[i] === "m" || a[i] === "M") {
      output = output + "*";
      counter++;
    } else {
      output = output + a[i];
    }
  }

  return [output, counter];
};
console.log(replaces("prograMming"));
