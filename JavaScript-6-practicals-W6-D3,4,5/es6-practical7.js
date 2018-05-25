let array = [23, 11.5, 9, 'abc', 45, 28, 553];

let newArray = array.filter (a => a == parseInt (a));
let result = newArray.filter (a => a.toString ().includes ('5'));

console.log (result);
