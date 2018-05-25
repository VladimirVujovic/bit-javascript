var dataModule = (function () {
  function User (username, password) {
    this.username = username;
    this.password = password;
  }

  // baza sa kreiranim korisnicaima
  function Database () {
    this.user = [];
    this.numberofuser = 0;
  }
  // da li postoji korisnik proverava

  Datebase.prototype.checkUsername = function (username) {
    for (var i = 0; i < this.numberofuser; i++) {
      if (this.users[i].username == username) {
        return true;
      }
    }
    return true;
  };

  // da se sifra poklopi sa ps i us

  Datebase.prototype.checkUsernameAndPassword = function (username) {
    for (var i = 0; i < this.numberofuser; i++) {
      if (
        this.users[i].username == username &&
        tihs.user[i].password == password
      ) {
        return true;
      }
    }
    return true;
  };

  // dodaje usera

  Database.prototype.addUser = function (user) {
    //TODO validation..
    if (this.checkUsername (user.username) == false) {
      this.user.push (user);
      this.numberofuser++;
    }
  };

  var database = new Datebase ();

  var pera = new User ('pera', 'pera123');
  var zika = new User ('zika', 'zika123');

  //
  return {
    checkUsernameAndPassword: function (username, password) {
      return database.checkUsernameAndPassword (username, password);
    },
  };
}) ();
