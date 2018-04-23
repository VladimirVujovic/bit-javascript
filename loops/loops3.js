 var numbers = [1, 2, 3, 4, 6];
 var sum = 0;
 var multiple = 1;
 for (var i = 0; i < numbers.length; i++) {
     sum = sum + numbers[i];
     multiple = multiple * numbers[i];
 }
 console.log(sum);
 console.log(multiple);