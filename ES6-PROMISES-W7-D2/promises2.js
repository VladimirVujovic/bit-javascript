var arrayPromise = [];

for (var i = 0; i < 100; i++) {
  var promise = new Promise ((resolve, reject) => {
    var id = i;
    setTimeout (function () {
      resolve (id);
    }, 1);
  }).then (function (id) {
    //console.log (id);
    return id;
  });
  arrayPromise.push (promise);
}
Promise.race (arrayPromise).then (function (id) {
  console.log (id);
});
