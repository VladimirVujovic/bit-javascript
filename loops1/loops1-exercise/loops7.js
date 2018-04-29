var averageMarks = (80 + 77 + 88 + 95 + 68) / 5;
console.log(averageMarks);

averageMarks

if (averageMarks < 60) {
    console.log("F");
} else if (averageMarks < 70 && averageMarks > 60) {
    console.log("D");
} else if (averageMarks < 80 && averageMarks > 70) {
    console.log("C");
} else if (averageMarks < 90 && averageMarks > 80) {
    console.log("B");
} else if (averageMarks < 100 && averageMarks > 90) {
    console.log("A");
}