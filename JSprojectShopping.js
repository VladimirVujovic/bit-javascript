"use strict";

(function() {
  function Product(name, price, expirationDate) {
    this.Id = parseInt((99999 - 10000) * Math.random() + 10000);
    this.name = name;
    this.price = Number(price).toFixed(2);
    this.expirationDate = new Date(expirationDate);

    this.getInfo = function() {
      var firstLetter = this.name.charAt(0).toUpperCase();
      var secondLetter = this.name.charAt(1).toUpperCase();
      var thirdLetter = this.Id + " , " + this.name + " , " + this.price;
      return firstLetter + secondLetter + thirdLetter;
    };
  }

  function ShoppingBag() {
    this.productList = [];
    this.today = new Date();

    this.addProduct = function(newProduct) {
      if (newProduct.expirationDate > this.today) {
        this.productList.push(newProduct);
      }
    };

    this.averagePrice = function() {
      this.averagePrice = parseFloat(productList);
    };
  }
  var watermelon = new Product("watermelon", 200, "2018-09-09");
  var banana = new Product("banana", 100, "2018-05-05");
  var vlada = new ShoppingBag();
  //vlada.addProduct(banana);
  //vlada.addProduct(watermelon);
  console.log(banana, watermelon);
})();
