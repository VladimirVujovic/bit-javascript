//formiranje funkcije map

function map (f) {
  //izlazni niz formiram
  var arrOut = [];
  //this u for prestavlja ulazni niz
  for (var i = 0; i < this.length; i++) {
    arrOut[i] = f (this[i]);
  }

  return arrOut;
}
//niz ima proto svojstvo array,pravim kostruktor funkciju koja ce svuda vaziti myMap

Array.prototype.myMap = map;
//prakticna primena
var a = [1, 2, 3, 4, 5, 6, 7, 8];
function double (x) {
  return x * 2;
}
var b = a.myMap (double);
console.log (b);

//some f-ja

function some (f) {
  for (var i = 0; i < this.length; i++) {
    if (f (this[i] === true)) {
      return true;
    }
  }
  return false;
}

//every

function every (f) {
  // every vraca samo true i false
  for (var i = 0; i < this.length; i++) {
    if (!f (this[i])) {
      return false;
    }
  }
  return true;
}

//drugi nacin za every

function every (f) {
  for (var i = 0; i < this.length; i++) {
    if (f (this[i] === false)) {
      return false;
    }
  }
  return true;
}
