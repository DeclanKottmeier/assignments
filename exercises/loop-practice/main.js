function stringy(string) {
    for(i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}

stringy("agfsdfgerg")

function stringier(string, char) {
    for(i = 0; i <= string.length; i++) {
        if (string[i] === char) {
            console.log(i)
            i = string.length + 2
        } else {}
    } if (i === string.length + 1) {
        console.log("Character not found")
    }
    else {}
}

stringier("qwertyuiopasdfghjvncmj", "m")

function fourtyTwo(array) {
    for(i = 0; i < array.length; i++) {
        if (array[i] === 42) {
            console.log("42 has been found")
            i = array.length + 2
        } else {}
    } if (i === array.length) {
        console.log("42 has not been found")
    } else{}
}

fourtyTwo([13,51,623,6,42,3,5,23])

function helpMe(tenNumbers) {
    var compare = tenNumbers[0]
    for(i = 0; i < 10; i++) {
        if (tenNumbers[i+1] < compare) {
            compare = tenNumbers[i+1]
        } else {}
    }
    console.log(compare)
}

helpMe([56,36,5,6,267,7,45,33,1754,832])