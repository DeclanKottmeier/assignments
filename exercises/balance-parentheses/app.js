function parentheses(str) {
    var open = 0;
    var closed = 0;
    if (str[0] !== '(') {
        return false;
    } else if ((str[(str.length - 1)]) !== ')') {
        return false;
    } else {
        for(k = 0; k < str.length; k++) {
            if (str[k] === '(') {
                open++;
            } else if (str[k] === ')') {
                closed++;
            } else {
                return false;
            }
        } if (open === closed) {
            return true;
        } else {
            return false;
        }
    }
}      

module.exports = parentheses;