for (i = start; i <= end; i++) {
    console.log(i);
}



var start = 1;
var end = 5;

for (var i = 0; i <= 10; i = i + 2) {
    console.log(i);
}




var i = 0;

for (; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}



var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);







var res = '\n';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        res += '*\t';
    }
    res += '\n';
}


for (var x = 0; x <= 10; x++) {
    console.log(x * x)
}