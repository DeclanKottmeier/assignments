function addition(a,b) {
    return a + b;
}

console.log(addition(3,2))

function order(a,b,c) {
    if ((a > b) && (a > c)) {
        return a;
    } if ((b > a) && (b > c)) {
        return b;
    } else {
        return c;
    }
}

console.log(order(6,9,14))

function evenOrOdd(a) {
    if (a % 2 === 0) {
        return "Even";
    } else {
        return "odd";
    }
}

console.log(evenOrOdd(7))

function stringLength(a) {
    if (a.length <= 20) {
        return (a + a);
    } else {
        return a.slice(a.length / 2);
    }
}

console.log(stringLength("Really big poops "))