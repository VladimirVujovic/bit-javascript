function Genre (name) {
  this.name = name;
}

Genre.prototype.getData = function () {
  var firstLetter = this.name.charAt (0).toUpperCase ();
  var secondLetter = this.name.charAt (this.name.length - 1).toUpperCase ();
  return firstLetter + secondLetter;
};
module.exports = {Genre};
