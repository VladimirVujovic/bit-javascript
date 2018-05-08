var a = 12345;

var s = new String(a);
var array = s.split("");
array.reverse();
var arrayreverse = array.reverse();

var i;
var b = "";
for (i = 0; i < arrayreverse.length; i++) {
  b = b + arrayreverse[i];
}

result = parseInt(b);
console.log(typeof result);
