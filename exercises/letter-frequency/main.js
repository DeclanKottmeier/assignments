function countChar(str) {
    var output = {

    };
    var x = 0
    for(i = 1; i < str.length; i++) {
        if (str[0] === str[i]) {
            x++
        } else {}
   
}
    output.push(x);
    str.spice(0,1);
}
console.log(countChar("test"))
