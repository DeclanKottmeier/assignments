var activity = "A really big poop"

function stringTheory() {
    activity = (activity.toUpperCase());
    return(activity.split(" "))
}
console.log(stringTheory())

var fun = "Oh boy what do I do?"

function morePlease() {
    fun = fun.replace("what do I do?", "I gotta poop!");
    fun = fun.toLowerCase();
    fun = fun.indexOf("poop");
    return fun
}
console.log(morePlease())

var message = ["Oh", "Please", "Help", "Me", "Nelly"]
var yikes = ["I", "Need", "Some", "Saving"]

function iveHadEnough() {
    message = message.concat(yikes);
    message = message.splice("Oh",1);
    return message
}
console.log(iveHadEnough())