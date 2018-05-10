"use strict";

(function() {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getDataPerson = function() {
      return this.name + " " + this.surname;
    };
  }
  function Seat(number, category) {
    if(category == undefined){
        this.category = "e"
    }
    this.number = new Number(number);
    this.category = category.charAt(0).toLowerCase();
    this.getDataSeat = function() {
      return this.number + " , " + this.category;
    };
  }
  function Passenger() {
    this.person = new Person();
    this.seat = new Seat(); 
    this.getDataPassenger = function(){
        return seat.
    }; 
  }
  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.Passenger = [];
  }
  function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
  }

  var person = new Person("Vladimir", "Vujovic");
  console.log(person);
  console.log(person.getDataPerson());

  var seat = new Seat("12", );
  console.log(seat);
  console.log(seat.getDataSeat());
})();



console.log(console.log("js"));



console.log(undefined)