function antiCaps(str){
 let newString = "";
 console.log(newString)
 for (let i = 0; i < str.length; i++) {
     if (str[i] === str[i].toUpperCase()) {
         newString += str[i].toLowerCase();
     }
 }
}

module.exports = antiCaps
