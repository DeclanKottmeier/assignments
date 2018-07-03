function sortedDogOwners(arr){
    var sortedByAge = arr.sort(function(a, b){
        return a.age - b.age;
    });
    return sortedByAge.filter(function(person){
        // check if person.pets has "dog" in it
        return person.pets.includes("dog");
    })
}

function arbitraryPractice(arr){
    // check for age
    var filteredByAge = arr.filter(function(person){
        return person.age > 20;
    });

    return filteredByAge.reduce(function(accumulator, person) {
        // check for nicknames
        // check for at least one dog
        var hasNickNames = person.pets.every(function(pet){
            return pet.nickNames.length;
        });
        var hasADog = person.pets.some(function(pet){
            return pet.type === "dog";
        });
        if(hasNicknames && hasADog){
            // get names and convert them to li's
            var liTags = person.pets.map(function(pet){
                return "<li>" + pet.name + "<li>";
            });
            return accumulator.concat(liTags);
        } else{
            return accumulator;
        }
},[])
}

module.exports = {
    sortedDogOwners: sortedDogOwners,
    arbitraryPractice: arbitraryPractice,
}
