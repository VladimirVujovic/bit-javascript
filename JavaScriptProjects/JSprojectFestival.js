"use strict";

(function() {
  function Genre(name) {
    this.name = name;

    this.getData = function() {
      var firstLetter = this.name.charAt(0).toUpperCase();
      var secondLetter = this.name.charAt(this.name.length - 1).toUpperCase();
      return firstLetter + secondLetter;
    };
  }

  function Movie(title, genre, lengthMovies) {
    this.title = title;
    this.genre = genre;
    this.lengthMovies = parseInt(lengthMovies);

    this.getDataMovie = function() {
      return (
        this.title + " , " + this.lengthMovies + " , " + this.genre.getData()
      );
    };
  }

  function Program(date) {
    this.date = new Date(date).toDateString();
    this.listMovies = [];
    this.totalNumberMovies = 0;

    this.addMovie = function(b) {
      this.listMovies.push(b);
      this.totalNumberMovies++;
    };

    this.getDataProgram = function() {
      var allmovies = 0;
      var movieList = "";
      for (var i = 0; i < this.listMovies.length; i++) {
        allmovies += this.listMovies[i].lengthMovies;
        movieList += this.listMovies[i].getDataMovie() + "\n\t";
      }
      return (
        this.date +
        " , Program length is " +
        allmovies +
        "min. \n\t" +
        movieList
      );
    };
  }
  function Festival(name) {
    this.name = name;
    this.listPrograms = [];
    this.numberMoviesInProgram = 0;

    this.addProgram = function(program) {
      this.listPrograms.push(program);
    };
  }

  var drama = new Genre("drama");
  //   console.log(drama.getData());
  var bone = new Movie("Bone", drama, "90");
  var cone = new Movie("Cone", drama, "90");
  var none = new Movie("None", drama, "90");

  //   console.log(bone);
  //   bone.
  var c = new Program("5/5/2005");
  c.addMovie(bone);
  c.addMovie(cone);
  c.addMovie(none);
  console.log(c.getDataProgram());
  //   var d = bone.getData();
  //   console.log(d);
  //var d = new Festival("Exit", "10", "50");
  //console.log(d);
})();

//   this.getDataProgram = function() {
//     var moviesLength = 0;
//     var movieList = "";

//     for (var i = 0; i < this.listMovies.length; i++) {
//       var ff = this.listMovies[i];
//       moviesLength = moviesLength + ff.lengthMovies;
//       movieList = movieList + ff.getDataMovie() + "\n\t";
//     }
//   };

//   return (
//     this.date +
//     " , program length is " +
//     moviesLength +
//     "min n\t" +
//     movieList
//   );
// };
