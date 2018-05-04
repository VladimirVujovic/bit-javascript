function NotebookProgramme(
  description,
  programmingLanguage,
  gitRepository,
  status
) {
  this.description = description;
  this.programmingLanguage = programmingLanguage;
  this.gitRepository = gitRepository;
  this.status = status;

  this.printGitRepository = function() {
    if (this.gitRepository === "bit-javascript") {
      console.log("bit-javascript");
    }
  };
  this.isImplementedWithJS = function() {
    if (this.programmingLanguage === "javascript") {
      console.log("Yes!");
    }
  };
  this.isCompletedProgramm = function() {
    if (this.status === true) {
      console.log("finished");
    }
  };

  //return this[(description, programmingLanguage, gitRepository, status)];
}

var p = new NotebookProgramme("exercise", "javascript", "bit-javascript", true);
var z = new NotebookProgramme(
  "exercise",
  "javascript",
  "bit-javascript",
  false
);
console.log(p);
p.printGitRepository();
p.isImplementedWithJS();
p.isCompletedProgramm();
