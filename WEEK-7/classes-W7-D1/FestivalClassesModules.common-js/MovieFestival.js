// Treba isproveravati

'use strict';

(function () {
  var festival = require ('./festival.commonjs.js');
  var program = require ('./program.commonjs.js');
  var movie = require ('./movie.commonjs.js');
  var genre = require ('./genre.commonjs.js');

  function createMovie (title, lengthMovies, Genre_name) {
    var genre = new Genre (Genre_name);
    var movie = new Movie (title, genre, lengthMovies);
    return movie;
  }

  function createProgram (date) {
    return new Program (date);
  }

  var action = new Genre ('action');
  var comedy = new Genre ('comedy');

  var drama = new Genre ('drama');

  // Festival.prototype.name = 'weekend festival';

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

// var dudeObj = {
//   job: 'Ninja',
//   say: function (who) {
//     return 'Hey ' + who + ', I am a ' + this.job;
//   },
// };
// dudeObj.say ('Dude'); // "Hey Dude, I am a Ninja"

// var programmerObj = {job: 'Scripting guru'};
// dudeObj.say.call (programmerObj, 'Dude');
