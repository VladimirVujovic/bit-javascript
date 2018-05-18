var array = [];
var arrProgram = [];

document.querySelector ('#add-button').addEventListener ('click', function () {
  createMovie ();
});

document.querySelector ('#add-button2').addEventListener ('click', function () {
  createProgram ();
});

document.querySelector ('#add-button3').addEventListener ('click', function () {
  AddMovieToProgram ();
  Update ();
});

// document.querySelector("#add-button3").addEventListener("click", function () {
//   addMovieToProgram();
// });

function createMovie () {
  var titleElement = document.querySelector ('#title');
  var lengthElement = document.querySelector ('#length');
  var genreElement = document.querySelector ('#genre');
  var currentArrayElement = document.querySelector ('#current-array');
  var errorElement = document.querySelector ('#error');
  var movieDrop = document.querySelector ('#movie');
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
  var option = '<option>-</option>';
  var list = '<ul>';
  for (var i = 0; i < array.length; i++) {
    list += '<li>' + array[i].getData () + '</li>';
    option += '<option>' + array[i].getData () + '</option>;';
  }
  list += '</ul>';

  currentArrayElement.innerHTML = list;
  movieDrop.innerHTML = option;
}

function createProgram () {
  var dateElement = document.querySelector ('#date');
  var currentArrayElement2 = document.querySelector ('#current-array2');
  var dropProgram = document.querySelector ('#dropProgram');

  var date = dateElement.value;

  var program = new Program (date);
  arrProgram.push (program);

  var option2 = '<option>-</option>';
  var list = '<ul>';
  for (var i = 0; i < arrProgram.length; i++) {
    list += '<li>' + arrProgram[i].getData () + '</li>';
    option2 += '<option>' + arrProgram[i].getData () + '</option>';
  }
  list += '</ul>';

  currentArrayElement2.innerHTML = list;
  dropProgram.innerHTML = option2;
}

var movieElement2 = document.querySelector ('#movie');
var programElement = document.querySelector ('#dropProgram');

function AddMovieToProgram () {
  console.log ('Add movie to program');
  var movie = movieElement2.value;
  var program = programElement.value;

  for (var i = 0; i < array.length; i++) {
    if (array[i].getData () == movie) {
      movie = array[i];
    }
  }
  for (var i = 0; i < arrProgram.length; i++) {
    if (arrProgram[i].getData () == program) {
      program = arrProgram[i];
    }
  }
  console.log (movie);
  console.log (program);

  program.addMovie (movie);

  console.log (program);
}

function Update () {
  //lista u create progam -U

  console.log ('update');
  var currentArrayElement2 = document.querySelector ('#current-array2');
  var programElement = document.querySelector ('#dropPrograms');
  var dropProgram = document.querySelector ('#dropProgram');

  var list = '<ul>';
  for (var i = 0; i < arrProgram.length; i++) {
    list += '<li>' + arrProgram[i].getData () + '</li>';
  }
  list += '</ul>';
  currentArrayElement2.innerHTML = list;

  //todo: update select lists

  var option = '<option>-</option>';
  for (var i = 0; i < arrProgram.length; i++) {
    list += '<option>' + arrProgram[i].getData () + '</option>';
  }
  dropProgram.innerHTML = option2;
}
