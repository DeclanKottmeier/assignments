var rs = require("readline-sync");

var options = ["open door", "Look for Key"];
var keyFound = false;
while(true){
    var selection = rs.keyInSelect(options, "What would you like to do?");

    if(selection === 0){
        // check for key
        if(keyFound){
            console.log("You win!");
        } else {
            console.log("It seems to require a key...");
        }
        }
    }
    if(selection === 1){
        // provide a new set of options for where to look
    }
    if(selection === -1){
        // ok start the loop
}