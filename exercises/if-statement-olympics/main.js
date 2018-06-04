if (5>3) {
    console.log("is greater than");
}

if ("cat".length === 3) {
    console.log("is the length");
}

if ("cat" !== "dog") {
    console.log("not the same");
}

var person = {  
    name: "Bobby",
    age: 12
  } 

  if ((person >= 18) && (person.charAt(0) === "B")) {
      console.log(person + " is allowed to go to the movie");
  } else {
      console.log(person + " is not allowed to go to the movie");
  }

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not at all equal");
}

if ((1 <= 2) && (2 === 4)) {
    console.log("yes");
}

var myNum = 10;

// if ((typeof "dog") === string) {
//     console.log("yes");
// }

// if ((typeof "true") === boolean) {
//     console.log("yes");
// }

  