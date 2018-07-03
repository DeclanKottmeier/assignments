const name = 'John'  
let age = 101  
let pets = ["cat", "dog"]

let petObjects = []

for (let i = 0; i < pets.length; i++){  
  let pet = {type: pets[i]}
  if (pets[i] === "cat"){
    let name = "fluffy"
  } else {
    let name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

const vegetables = carrots.map(function(carrot){  
    return {type: "carrot", name: carrot}
})

console.log(vegetables)