function total(arr) {
    return arr.reduce((a,b) => a + b);
}

console.log(total([1,2,3])) // 6

function stringConcat(arr) {
    return arr.join('');
}

console.log(stringConcat([1,2,3])) // "123"