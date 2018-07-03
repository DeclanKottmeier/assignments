var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function loopdyloop(people, alphabet) {
    var loopy = []
    for (i = 0; i < people.length; i++) {
        loopy.push(people[i])
            for (k = 0; k < alphabet.length; k++) {
                loopy.push(alphabet[k])
            }
    }
    console.log(loopy)
}

loopdyloop(people, alphabet)