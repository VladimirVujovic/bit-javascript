var a = [1, 2, 3, 4, 5];

function myPush (a) {
  var b = 10;

  a.length = a.length + 1;

  a[a.length - 1] = b;
  console.log (a);
}
myPush (a);
//push
