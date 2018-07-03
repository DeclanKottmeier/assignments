function parentheses(str) {
    var open = 0;
    var closed = 0;
    if (str[0] !== '(') {
        console.log('Parentheses are not balanced');
    } else if ((str[(str.length - 1)]) !== ')') {
        console.log('Parentheses are not balanced');
    } else {
        for(k = 0; k < str.length; k++) {
            if (str[k] === '(') {
                open++;
            } else if (str[k] === ')') {
                closed++;
            } else {
                console.log('Parentheses are not balanced');
            }
        } if (open === closed) {
            console.log('Parentheses are balanced');
        } else {
            console.log('Parentheses are not balanced');
        }
    }
}      

module.exports = parentheses;