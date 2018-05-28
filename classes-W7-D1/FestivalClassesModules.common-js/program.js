function Program (date) {
  this.date = new Date (date).toDateString ();
  this.listMovies = [];
  this.totalNumberMovies = 0;
}
Program.prototype.addMovie = function (b) {
  this.listMovies.push (b);
  this.totalNumberMovies++;
};
Program.prototype.getDataProgram = function () {
  var allmovies = 0;
  var movieList = '';
  for (var i = 0; i < this.listMovies.length; i++) {
    allmovies += this.listMovies[i].lengthMovies;
    movieList += this.listMovies[i].getDataMovie () + '\n\t';
  }
  return (
    this.date + ' , Program length is ' + allmovies + 'min. \n\t' + movieList
  );
};
module.exports = {Program};
