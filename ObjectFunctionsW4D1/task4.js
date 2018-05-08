function alphabet(string) {
  var b = "";
  var array = string.split(" ");
  for (i = 0; i < array.length; i++) {
    b =
      b +
      array[i]
        .split("")
        .sort()
        .join("") +
      " ";
  }
  return b;
}
console.log(alphabet("Republic of Serbia"));
