let array = [4, 6, 11, -9, 2.1];

function increases (x = 1) {
  b = [];
  for (var i = 0; i < array.length; i++) {
    b[i] = array[i] + x;
  }
  console.log (b);
}
increases ();
