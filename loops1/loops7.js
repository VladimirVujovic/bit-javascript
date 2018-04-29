var average = (80 + 77 + 88 + 95 + 68) / 5;
console.log(average);

average;

if (average < 60) {
    console.log("F");
} else if (average >= 60 && average < 70) {
    console.log("D");
} else if (average >= 70 && average < 80) {
    console.log("C");
} else if (average >= 80 && average < 90) {
    console.log("B");
} else if (average >= 90 && average < 100) {
    console.log("A");
}