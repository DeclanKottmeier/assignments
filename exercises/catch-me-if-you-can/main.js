function sum(x, y){  
    if ((isNaN(x) == true) || (isNaN(y) == true)) {
        throw "Input is not a number"
    }
    //check data types first and throw error
    return x + y;
  }

function login(username, password) {
    if (username !== password) {
        throw "Password does not match username"
    } else 
    return "login successful!"
}

try {
    login("declan", "decla")
} catch(err) {
    console.log(err)
}