// this task is not correct, because we need to find random number, not ordinary number

for (var i = 0; i < 100; i++) {
  const arrayPromise = new Promise ((resolve, reject) => {
    var id = i;
    setTimeout (function () {
      resolve (id);
    }, 400);
  }).then (function (id) {
    console.log (id);
  });
}
