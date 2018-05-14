var a = 12;
var b = 0;

console.log(a / b);

var array = [];
var n = 5;

try {
  array = [1, 3, 2, 4, "b"];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] != "number" && isNaN(array[i])) {
      throw new Error("Uneti broj !");
    }
  }
  if (array.length > n) {
    throw new Error("Broj je van niza");
  }
} catch (e) {
  if (e instanceof TypeError) {
  }

  if (e instanceof RangeError) {
  }
  console.log(e.message);
} finally {
  console.log(array);
}
