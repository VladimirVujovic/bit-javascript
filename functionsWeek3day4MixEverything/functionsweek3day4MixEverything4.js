"use strict";

var final = function(name, surname, email) {
  function f() {
    var wholeName;
    wholeName = name + "." + surname;
    //var email;

    wholeName = wholeName + email;

    return wholeName;
  }
  return f();
};

var name = "pera";
var surname = "surname";
var email = "@gmail.com";

console.log(final(name, surname, email));

("use strict");

var final = function(name, surname) {
  function f() {
    var email = "";

    email = name + "." + surname + "@gmail.com";
    return email;
  }
  return f();
};

console.log(final("pera", "peric"));
