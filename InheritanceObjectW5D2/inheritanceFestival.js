'use strict';

(function () {
  function createMovie (title, lengthMovies, Genre_name) {
    var genre = new Genre (Genre_name);
    var movie = new Movie (title, genre, lengthMovies);
    return movie;
  }

  function createProgram (date) {
    return new Program (date);
  }

  function Genre (name) {
    this.name = name;

    // this.getData = function() {
    //   var firstLetter = this.name.charAt(0).toUpperCase();
    //   var secondLetter = this.name.charAt(this.name.length - 1).toUpperCase();
    //   return firstLetter + secondLetter;
    // };
  }

  Genre.prototype.getData = function () {
    var firstLetter = this.name.charAt (0).toUpperCase ();
    var secondLetter = this.name.charAt (this.name.length - 1).toUpperCase ();
    return firstLetter + secondLetter;
  };

  function Movie (title, genre, lengthMovies) {
    this.title = title;
    this.genre = genre;
    this.lengthMovies = parseInt (lengthMovies);

    Movie.prototype.getDataMovie = function () {
      return (
        this.title + ' , ' + this.lengthMovies + ' , ' + this.genre.getData ()
      );
    };
  }
  // this.getDataMovie = function() {
  //   return (
  //     this.title + " , " + this.lengthMovies + " , " + this.genre.getData()
  //   );
  // };

  function Program (date) {
    this.date = new Date (date).toDateString ();
    this.listMovies = [];
    this.totalNumberMovies = 0;

    Program.prototype.addMovie = function (b) {
      this.listMovies.push (b);
      this.totalNumberMovies++;
    };

    // this.addMovie = function(b) {
    //   this.listMovies.push(b);
    //   this.totalNumberMovies++;
    // };

    Program.prototype.getDataProgram = function () {
      var allmovies = 0;
      var movieList = '';
      for (var i = 0; i < this.listMovies.length; i++) {
        allmovies += this.listMovies[i].lengthMovies;
        movieList += this.listMovies[i].getDataMovie () + '\n\t';
      }
      return (
        this.date +
        ' , Program length is ' +
        allmovies +
        'min. \n\t' +
        movieList
      );
    };
  }
  // this.getDataProgram = function() {
  //   var allmovies = 0;
  //   var movieList = "";
  //   for (var i = 0; i < this.listMovies.length; i++) {
  //     allmovies += this.listMovies[i].lengthMovies;
  //     movieList += this.listMovies[i].getDataMovie() + "\n\t";
  //   }
  //   return (
  //     this.date +
  //     " , Program length is " +
  //     allmovies +
  //     "min. \n\t" +
  //     movieList
  //   );
  // };

  function Festival (name) {
    this.name = name;
    this.listPrograms = [];
    this.numberMoviesInProgram = 0;

    Festival.prototype.addProgram = function (program) {
      this.listPrograms.push (program);
    };
    this.getDataFestival = function () {
      return (
        this.name +
        ' has ' +
        c.totalNumberMovies +
        ' movie titles  ' +
        c.getDataProgram ()
      );
    };
  }

  // this.addProgram = function(program) {
  //   this.listPrograms.push(program);
  // };
  // this.getDataFestival = function() {
  //   return (
  //     this.name +
  //     " has " +
  //     c.totalNumberMovies +
  //     " movie titles  " +
  //     c.getDataProgram()
  //   );
  // };

  var action = new Genre ('action');
  var comedy = new Genre ('comedy');

  var drama = new Genre ('drama');

  Festival.prototype.name = 'weekend festival';

  var love = createMovie ('Love', comedy, '50');
  var scarface = createMovie ('Scarface', action, '150');
  var godfather = createMovie ('Godfather', drama, '200');
  var cone = createMovie ('Cone', action, '100');
  var hangover = createMovie ('Hangover', comedy, '110');
  var bone = createMovie ('Bone', '100 min', 'drama');

  //console.log(bone);

  var a = new Festival ('weekend festival');

  var c = new Program ('5/5/2005');

  //   var d = createProgram("10/10/2010");
  //   console.log(d);

  c.addMovie (love);
  c.addMovie (scarface);
  c.addMovie (cone);
  c.addMovie (godfather);
  c.addMovie (hangover);
  c.addMovie (bone);

  console.log (Program.prototype);

  //console.log (love.title.call (a, ''));
  console.log (c.getDataProgram ());
  console.log (a.getDataFestival ());
}) ();

//   console.log(c.getDataProgram());
//   console.log(a.getDataFestival());

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
var dudeObj = {
  job: 'Ninja',
  say: function (who) {
    return 'Hey ' + who + ', I am a ' + this.job;
  },
};
dudeObj.say ('Dude'); // "Hey Dude, I am a Ninja"

var programmerObj = {job: 'Scripting guru'};
dudeObj.say.call (programmerObj, 'Dude');
