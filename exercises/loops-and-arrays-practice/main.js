// var x = 0

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// for(var i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//         x++
//     }
// }
// console.log(x)

// var peopleWhoWantToSeeMadMaxFuryRoad = [  
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 

//   for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//       if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male")) {
//           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in.")
//       } else if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female")) {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let her in.")
//       } else if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male")) {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max Fury Road.")
//         } else {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max Fury Road.")
//         }
//   }

  var lightSwitches = [2, 5, 435, 4, 3]
  var lightCount = 0

  for(var i = 0; i < lightSwitches.length; i++) {
      lightCount += lightSwitches[i]
  }

  console.log(lightCount)
