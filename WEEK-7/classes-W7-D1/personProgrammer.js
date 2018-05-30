class Person {
  constructor (name, surname) {
    this.name = name;
    this.surname = surname;
  }
  PrintPersonData () {
    console.log (`${this.name}, ${this.surname}`);
  }
}

class Programmer extends Person {
  constructor (name, surname, languages) {
    super (name, surname);
    this.languages = languages;
  }
  print () {
    super.PrintPersonData ();
    console.log (this.languages);
  }

  learnedNewLanguage (newLanguage) {
    //     super.print ();
    this.languages.push (newLanguage);
  }
}
var a = new Person ('kristina', 'raickovic');

var b = new Programmer ('kristina', 'raickovic', ['javaScript', 'PHP', 'C']);
var c = new Person ('vladimir', 'vujovic');
var d = new Programmer ('vladimir', 'vujovic', ['PHP']);
//b.PrintPersonData ();
b.print ();
d.print ();
d.learnedNewLanguage ('C#');
d.print ();
