function fizzler() {
    var fizzbuzz = []
    for(k = 1; k < 101; k++) {
        if ((k % 3 === 0) && (k % 5 === 0)) {
            fizzbuzz.push("fizzbuzz");
        } if (k % 5 === 0) {
            fizzbuzz.push("buzz");
        } if (k % 3 === 0) {
            fizzbuzz.push("fizz");
        } else {
            fizzbuzz.push(k)
        }
    }
    return(fizzbuzz)
}

fizzler()
console.log(fizzler())