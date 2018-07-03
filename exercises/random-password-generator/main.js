function createPassword(integer) {
    var password = "";
    var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()";
    for(i = 0; i <= integer; i++) {
        password += characters[(Math.floor(Math.random() * (characters.length)))];
    }
    return password
}

console.log(createPassword(9));
