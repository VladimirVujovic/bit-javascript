function Movie(title, length, genre) {
  this.title = title;
  this.length = length;
  this.genre = genre;
}

Movie.prototype.getData = function () {
  var firstLetter = this.genre.charAt(0).toUpperCase();
  var lastLetter = this.genre.charAt(this.genre.length - 1).toUpperCase();
  var result =
    this.title + ', ' + this.length + 'min' + ', ' + firstLetter + lastLetter;
  return result;
};

function Program(date) {
  this.date = new Date(date);
  this.movies = [];
  this.numberOfMovies = 0;
}

Program.prototype.addMovie = function (movie) {
  this.movies.push(movie);
  this.numberOfMovies++;
}

Program.prototype.MoviesLength = function () {
  var length = 0;
  for (var i = 0; i < this.movies.length; i++) {
    length += this.movies.length;
    return length;
  }
}

Program.prototype.getData = function () {
  var result;

  var day = this.date.getDate();
  var month = 1 + this.date.getMonth();
  var year = this.date.getFullYear();

  var datum = day + '.' + month + '.' + year;
  if (this.numberOfMovies == 0) {
    result = datum + ' ' + this.numberOfMovies + ' ' + 'TBA';
    return result;
  } else {
    result = datum + ' ' + this.numberOfMovies + ', ' + 'duration' + length + 'min'; //todo ukupna duzina svih filmova

    //'min';
  }
};


