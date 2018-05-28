let array = [1.6, 11.34, 29.23, 7, 3.11, 18];

let newArray = array
  .map ((e, i) => {
    if (e > 10) {
      return i;
    } else {
      return -1;
    }
  })
  .filter (i => i != -1);
console.log (newArray);
