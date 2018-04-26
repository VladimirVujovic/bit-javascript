function string(n) {
    var p = "Ha";
    var i = 1;
    do {

        i++;
        p = p + 'Ha';

    } while (i < n);
    return p;
}

result = string(3);
console.log(result);








function string(p, n) {
    var output = "";

    for (i = 0; i < n; i++) {
        output = output + p;
    }

    return output + "";
}

console.log(string("kh", 20));


