var a = "webmaster";
var s = new String(a);
array = s.split("");

var c = "";
var alphabet = array.sort();
for (i = 0; i < alphabet.length; i++) {
  c = c + alphabet[i];
}
console.log(c);
