const myFirstPromise = new Promise ((resolve, reject) => {
  var date = new Date ();
  resolve (date);
});

myFirstPromise
  .then (date => {
    console.log (date);
    return 'done';
  })
  .then (msg => {
    console.log (msg);
  });
