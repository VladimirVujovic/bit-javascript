// function Rate (x = 120) {
//   var taxRate = 0.2;
//   var result = x * taxRate;
//   console.log (result);
// }
// Rate ();

let rate = 120;
let percentage = rate * 0.20;
console.log (percentage);

// let rate = 120;
let percentage = rate => rate * 0.20;
console.log (percentage (140));
