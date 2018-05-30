function Festival (name) {
  this.name = name;
  this.listPrograms = [];
  this.numberMoviesInProgram = 0;
}

Festival.prototype.addProgram = function (program) {
  this.listPrograms.push (program);
};
module.exports (Festival);
