'use strict';

function Person (name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.fullName = function () {
  return this.name + ' ' + this.surname;
};
// Person.prototype.printInfo = function() {
//   return console.log(this.fullName);
// };

var p = new Person ('Vladimir', 'Vujovic');
//console.log(p);

function Employees (name, surname, job, salary) {
  Person.call (this, name, surname);
  this.job = job;
  this.salary = salary;
  var increaseSalary;

  Employees.prototype.getData = function () {
    //na Person nivou iskoristiti fullName
    return this.job + ' ' + this.salary;
  };

  Employees.prototype.getSalary = function () {
    return this.salary;
  };
  Employees.prototype.increaseSalary = function () {
    return increaseSalary;
  };
}

Employees.prototype = Object.create (Person.prototype);

Employees.prototype.constructor = Employees;

Employees.prototype.fullName = function () {
  var prog_fullName = Employees.prototype.__proto__.fullName.call (this);
  return prog_fullName + ' ' + this.job + ' ' + this.salary;
};
Employees.prototype.getData = function () {
  var get_Data = Employees.prototype.__proto__.getData.call (this);
  return get_Data + ' ' + this.specialization;
};

Employees.prototype.getData = function () {
  return this.name + this.surname + this.salary;
};
Employees.prototype.getSalary = function () {
  console.log (this.getSalary);
};
Employees.prototype.getIncreaseSalary = function () {
  var increaseSalary = this.salary * 1.1;
  return increaseSalary;
};

function Developer (name, surname, job, salary, specialization) {
  Employees.call (this, name, surname, job, salary);
  this.specialization = specialization;
}

Developer.prototype = Object.create (Employees.prototype);

Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialization = function () {
  console.log (this.specialization);
};

function Manager (name, surname, job, salary, department) {
  Employees.call (this, name, surname, job, salary);
  this.department = department;
}

Manager.prototype = Object.create (Employees.prototype);

Manager.prototype.constructor = Manager;

Manager.prototype.getData = function () {
  var get_Data = Manager.prototype.__proto__.getData.call (this);
  return get_Data + ' ' + this.department;
};
Manager.prototype.getDepartment = function () {
  console.log (this.department);
};
Manager.prototype.changeDepartment = function (a) {
  this.department = a;
};

var employees = new Employees (
  'Kristina',
  'Raickovic',
  'FrontEndDeveloper',
  500
);

var developer = new Developer (
  'andjelka',
  'zecevic',
  'frontDeveloper',
  500,
  'web'
);
var manager = new Manager (
  'andjelka',
  'zecevic',
  'frontDeveloper',
  500,
  'specialDepartment-room-007'
);

developer.getSpecialization ();
manager.getDepartment ();
manager.changeDepartment (100);
manager.getDepartment ();

employees.getData ();
console.log (employees.getSalary ());
console.log (employees.getIncreaseSalary ());
console.log (employees.fullName ());
console.log (developer.getData ());
console.log (manager.getData ());
