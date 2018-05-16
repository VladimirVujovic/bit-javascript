function Movie (title, length, genre) {
  this.title = title;
  this.length = length;
  this.genre = genre;
}

Movie.prototype.getData = function () {
  var firstLetter = this.genre.charAt (0).toUpperCase ();
  var lastLetter = this.genre.charAt (this.genre.length - 1).toUpperCase ();
  var result =
    this.title + ', ' + this.length + 'min' + ', ' + firstLetter + lastLetter;
  return result;
};

function Program (date) {
  this.date = new Date (date);
  this.movies = [];
  this.numberOfMovies = 0;
}
Program.prototype.getData = function () {
  var result;

  var day = this.date.getDay ();
  var month = this.date.getMonth ();
  var year = this.date.getFullYear ();

  var datum = day + '.' + month + '.' + year;
  if (this.numberOfMovies == 0) {
    result = datum + ' ' + this.numberOfMovies + ' ' + 'TBA';
    return result;
  } else {
    result = datum + ' ' + this.numberOfMovies;

    //'min';
  }
};
