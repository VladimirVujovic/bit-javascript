function Movie (title, genre, lengthMovies) {
  this.title = title;
  this.genre = genre;
  this.lengthMovies = parseInt (lengthMovies);
}
Movie.prototype.getDataMovie = function () {
  return this.title + ' , ' + this.lengthMovies + ' , ' + this.genre.getData ();
};
module.exports = {Movie};
