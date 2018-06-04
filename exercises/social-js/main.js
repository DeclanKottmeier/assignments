var Poseidon ={
    age: 16001,
    hobbies: ["swimming", "killing fish", "tidal waves"],
    favoritePlaces: ["Pacific Ocean", "Great Pacific Garbage Patch", "Gary's Bathtub"],
    friends: [],
    enemies: [
        {
            name: "Hades", 
            age: 16001.5,
            hobbies: ["Dying", "Spongebaths", "Cooking"],
        },
        {
            name: "Zeus",
            age: 15394,
            hobbies: ["Barn Fires", "Netflix n Chill"],
        },
        {
            name: "Kyle",
            age: 26,
            hobbies: ["Hiking", "Fidget Spinners", "Selling booze to highschoolers"],
            schoolsBannedFrom: [
                {
                    school: "his old highschool",
                    dateBanned: 2011,
                    bannedUntil: 3011,
                },
                {
                    school: "all universities",
                    dateBanned: 2013,
                    bannedUntil: "North Korea takes over",
                    banPlacedBy: "unknown"
                }
            ] 
        }
    ],
    olympicGames: [
        {
            place: "Munich",
            year: 1972,
            event: "100m freestyle",
            medal: "Silver",
            beatenBy: "Aquaman"
        },
        {
            place: "Sochi",
            year: 2014,
            event: "Ski Jumping",
            medal: "Gold",
        },
        {
            place: "Rio",
            year: 2016,
            event: "did not compete, helped fill the swimming pools in",

        }
    ]
};
console.log("Poseidon enjoys " + Poseidon.hobbies[2] + ", swimming in " + Poseidon.favoritePlaces[2] + " and hates " + Poseidon.enemies[2].name)
