// var a = {x: 1, y: 2};

// function B (name,surname) {
//   this.name;
//   this.surname;
// //   this.f = function () {
// //     return 2;
// //   };
// }
// b = new B("kris","raic")
// B.prototayp.f = function(){
//         return 2;
// }

// console.

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// var p = new Point(3, 1);
// console.log(p);
// console.log(x);

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   this.isbn = (function () {
//           return Math.floor(Math.random(0, 1000));
//   })();
//   this.description = (function () {
//           return "Book " + this.title + " by " + this.author;
//   })();
//   this.describe = function () {
//           console.log("Book " + title + " by " + author);
//   }
// }
// var jsBook = new Book('The Definitive Guide to JS', 'David Flanagan');
// var jsBook.title = "Learning JS Design Patterns";
// var jsBook.author = "Addy Osmani";

// console.log(jsBook.describe());

// var a = [1,2,6,5];

// for(var i =0; i<a.length; i++){
//   console.log(a[i]);
// }

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// var p = new Point(3, 1);
// console.log(p);
// console.log(x);

function Book (title, author) {
  this.title = title;
  this.author = author;
  this.isbn = (function () {
    return Math.floor (Math.random (0, 1000));
  }) ();
  this.description = (function () {
    return 'Book ' + this.title + ' by ' + this.author;
  }) ();
  this.describe = function () {
    console.log ('Book ' + title + ' by ' + author);
  };
}
var jsBook = new Book ('The Definitive Guide to JS', 'David Flanagan');
jsBook.title = 'Learning JS Design Patterns';
jsBook.author = 'Addy Osmani';

console.log (jsBook.describe ());

function Point (x, y) {
  this.x = x;
  this.y = y;
}
var p = new Point (3, 1);
console.log (p);
console.log (x);

function Book (title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.getAuthor = function () {
  console.log (this.author);
};
var jsBook = new Book ('The Definitive Guide to JS', 'David Flanagan');
jsBook.getAuthor ();

function CoffeeMaker (type) {
  this.type = type;

  this.printCoffee = function () {
    console.log (this);
  };
}
var coffee = new CoffeeMaker ('espresso');
coffee.printCoffee ();
