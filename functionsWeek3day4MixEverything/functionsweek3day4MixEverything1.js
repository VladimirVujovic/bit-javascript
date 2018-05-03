"use strict";

var changePlace = function(a) {
  var i;
  var temp;

  temp = a[0];
  a[0] = a[a.length - 1];
  a[a.length - 1] = temp;

  return array;
};

var array = [4, 5, 11, 9];

console.log(changePlace(array));
