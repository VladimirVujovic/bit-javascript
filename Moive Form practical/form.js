var array = [];
var arrProgram = [];

document.querySelector ('#add-button').addEventListener ('click', function () {
  createMovie ();
});

document.querySelector ('#add-button2').addEventListener ('click', function () {
  createProgram ();
});

function createMovie () {
  var titleElement = document.querySelector ('#title');
  var lengthElement = document.querySelector ('#length');
  var genreElement = document.querySelector ('#genre');
  var currentArrayElement = document.querySelector ('#current-array');
  var errorElement = document.querySelector ('#error');

  var title = titleElement.value;
  var length = parseInt (lengthElement.value);
  var genre = genreElement.value;

  //todo: proveriti podatke
  //title mora biti unet, length bude broj, genre mora biti odabran
  if (title != '' && parseInt (length) == lengthElement.value) {
    var movie = new Movie (title, length, genre);
    array.push (movie);
    errorElement.innerHTML = '';
  } else {
    errorElement.innerHTML = 'Please fill the field, appropriately!';
  }

  var list = '<ul>';
  for (var i = 0; i < array.length; i++) {
    list += '<li>' + array[i].getData () + '</li>';
  }
  list += '</ul>';
  currentArrayElement.innerHTML = list;
}

function createProgram () {
  var dateElement = document.querySelector ('#date');
  var currentArrayElement2 = document.querySelector ('#current-array2');

  var date = dateElement.value;

  var program = new Program (date);
  arrProgram.push (program);

  var list = '<ul>';
  for (var i = 0; i < arrProgram.length; i++) {
    list += '<li>' + date + arrProgram[i].getData () + '</li>';
  }
  list += '</ul>';
  currentArrayElement2.innerHTML = list;
}
