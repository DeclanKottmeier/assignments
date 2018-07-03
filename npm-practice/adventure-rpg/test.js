var rs = require("readline-sync");

var graveNames = ["Draugr", "Large Skeleton", "Ghoul"];
var graveWeapons = [["Dagger", 24], ["Steel Axe", 32], ["Shortsword", 34], ["Longbow", 28], ["Spear", 22]]
var graveCount = 0

var player = {
    name: "Declan",
    hp: 250,
    hpMax: 250,
    damage: 50,
    enemiesKilled: 0,
    gold: 0,
    dragonHead: false,
    tombKey: true,
    fireShield: true
}

function graveyard() {
    if (rs.keyInYN("\nCAUTION! The graveyard is full of creatures more dangerous than those in the forest. \nYou must defeat multiple enemies to get to the end!\n Do you want to continue?\n")) {
        graveFight()
    } else {
        movement()
    }
}

function graveFight() {
    var graveWeapon = graveWeapons[Math.floor((graveWeapons.length) * Math.random())];
    var weaponName = graveWeapon[0]
    var weaponDamage = graveWeapon[1]
    var graveName = graveNames[Math.floor(graveNames.length * Math.random())];
    var enemyHp = Math.floor((Math.random() * 36) + 60);
    var graveGold = Math.floor((Math.random() * 16) + 5);

    function attack() {
        var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
        rs.keyInPause("Attack!");
        enemyHp -= playerAttack
        if (enemyHp > 0) {
            console.log("\nYou attacked the " + graveName + " for " + playerAttack + " hitpoints! \nThe " + graveName + " now has " + enemyHp + " health!\n")
        } else {
            console.log("\nYou have killed the " + graveName + "!\n")
            rs.keyInPause()
            graveCount++
            if (weaponDamage > player.damage) {
                console.log("\nYou have picked up a " + weaponName + " and found " + graveGold + " gold!\n")
                player.damage = weaponDamage
                player.gold += graveGold
                player.enemiesKilled++
                rs.keyInPause()
                if (rs.keyInYN("Would you like to continue exploring the graveyard?")) {
                    graveFight()
                } else {
                    movement()
                }
            } else {
                console.log("\nYou have found " + graveGold + " gold!\n")
                player.gold += graveGold
                player.enemiesKilled++
                rs.keyInPause()
                if (rs.keyInYN("Would you like to continue exploring the graveyard?")) {
                    if (graveCount < 3) {
                    graveFight()
                    } else {
                        tombBoss();
                    }
                } else {
                    movement();
                }
            }
        }
    }

    function defend() {
            var enemyDamage = Math.floor((Math.random() * 16) + 8);
            rs.keyInPause("Defend!")
            player.hp -= enemyDamage
        if (player.hp > 0) {
            console.log("\nThe " + graveName + " hit you for " + enemyDamage + "! \nYou now have " + player.hp + " health. \n")
        } else {
            console.log("\nThe " + graveName + " hit you for " + enemyDamage + "! \nYou have died!\n")
        }
    }

    console.log("\nYou have ran into a " + graveName + " carrying a " + weaponName + " !\n")
    while((enemyHp > 0 && player.hp > 0) && (escape === false)) {
        escape = Math.random() >= 0.5;
        var fightOrFlight = ["Fight!", "Run!"];
        fightOrFlight = rs.keyInSelect(fightOrFlight, "What do you want to do?");

         if ((fightOrFlight === 1) && (escape === true)) {
            console.log("\nYou have escaped!\n")
            graveCount = 0;
            movement();
        } if ((fightOrFlight === 0)) {
            escape = false
            attack();
            if (enemyHp > 0) {
            defend();
        } else {}
        } else if ((fightOrFlight === 1) && (escape === false)) {
        console.log("\nYou failed to escape!\n")
        defend();
        }
    }  
}

function tombBoss() {
    var bossName = "Dragon Priest";
    var bossHp = 100;

    console.log("\nAfter deating multiple enemies you reach the end of one of the tombs. \nInside you find a Dragon Priest. You can escape now with your life or fight it.\n")
    if ((rs.keyInYN("\nWould you like to continue attack the Dragon Priest?\n"))) {
        function tombAttack() {
            var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
            rs.keyInPause("Attack!");
            bossHp -= playerAttack
            if (bossHp > 0) {
                console.log("\nYou attacked the " + bossName + " for " + playerAttack + " hitpoints! \nThe " + bossName + " now has " + bossHp + " health!\n")
            } else {
                console.log("\nYou have killed the " + bossName + "!\n")
                rs.keyInPause()
                player.gold += 100;
                console.log("\nYou have found 100 gold and a health potion. Your health is now maxed!\n")
                rs.keyInPause()
                console.log("\nThe Dragon Priest also dropped an old key!\n")
                player.enemiesKilled++
                player.hp = player.hpMax
                tombKey = true
                rs.keyInPause()
                movement();
                }
            }
    
        function tombDefend() {
                var enemyDamage = Math.floor((Math.random() * 20) + 10);
                rs.keyInPause("Defend!")
                player.hp -= enemyDamage
            if (player.hp > 0) {
                console.log("\nThe " + bossName + " hit you for " + enemyDamage + "! \nYou now have " + player.hp + " health.\n")
            } else {
                console.log("\nThe " + bossName + " hit you for " + enemyDamage + "! \nYou have died!\n")
            }
        }
        while(bossHp > 0 && player.hp > 0) {
            tombAttack();
            if (tombKey === false) {
            tombDefend();
            } else {
            }
        }
    } else {
    movement()
    }  
}

function castle(){
    if (rs.keyInYN("\nCAUTION! The castle is where the dragon is located, however there may be other dangerous enemies around! \n Do you want to continue?\n")) {
        castleFight()
    } else {
        movement()
    }
}

function castleFight(){
    var bossName = "Draugr";
    var bossHp = 130;
    var defeat = false;

    console.log("\nYou enter the castle walls and notice that the inside is strangely empty.\nAfter walking through for what feels like an hour, you finally reach the end room with a huge door.\nYou hear a door behind you close, and turn around to face a freakishly large Draugr.\nRealizing you can't escape you prepare to attack.\n")
        function draugrAttack() {
            var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
            rs.keyInPause("Attack!");
            bossHp -= playerAttack
            if (bossHp > 0) {
                console.log("\nYou attacked the Draugr for " + playerAttack + " hitpoints! \nThe Draugr now has " + bossHp + " health!\n")
            } else {
                console.log("\nYou have killed the Draugr!\n")
                rs.keyInPause()
                defeat = true;
                player.gold += 150;
                console.log("\nYou have found 150 gold!\n")
                rs.keyInPause()
                player.enemiesKilled++
                if (player.tombKey === true) {
                    console.log("\nAfter defeating the Draugr you approach the large door and are able to use your tomb key on it.\n");
                    rs.keyInPause();
                    if (rs.keyInYN("Would you like to continue to the Dragon's Lair?")) {
                        dragonFight();    
                    } else {
                        movement();
                    }
                } else {
                    console.log("\nAfter defeating the Draugr you approach the large door only to realize it needs a key to unlock.\nYou are forced to leave the castle.\n")
                    rs.keyInPause();
                    movement();
                } 
            }
        }

        function draugrDefend() {
                var enemyDamage = Math.floor((Math.random() * 25) + 13);
                rs.keyInPause("Defend!")
                player.hp -= enemyDamage
            if (player.hp > 0) {
                console.log("\nThe Draugr hit you for " + enemyDamage + "! \nYou now have " + player.hp + " health.\n")
            } else {
                console.log("\nThe Draugr hit you for " + enemyDamage + "! \nYou have died!\n")
            }
        }
        while(bossHp > 0 && player.hp > 0) {
            draugrAttack();
            if (defeat === false) {
            draugrDefend();
            } else {
            }
        }
}

function dragonFight() {
    var bossName = "Dragon";
    var bossHp = 200;
    var defeat = false;

    console.log("\nYou open the large doors with your tomb key and enter a huge dungeon.\nInside, as if expecting you, is a large black dragon staring at you.\nIt breathes in then unleashes a stream of fire upon you.\n")
    rs.keyInPause();
    if(player.fireShield === true) {
        function dragonAttack() {
            var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
            rs.keyInPause("Attack!");
            bossHp -= playerAttack
            if (bossHp > 0) {
                console.log("\nYou attacked the Dragon for " + playerAttack + " hitpoints! \nThe Dragon now has " + bossHp + " health!\n")
            } else {
                console.log("\nYou have killed the Dragon!\n")
                rs.keyInPause()
                defeat = true;
                console.log("\nYou cut off the head of the dragon as proof.\nYou can now return to the city!\n")
                rs.keyInPause()
                player.enemiesKilled++
                player.dragonHead = true;
                movement();
            }
        }

        function dragonDefend() {
                var enemyDamage = Math.floor((Math.random() * 25) + 18);
                rs.keyInPause("Defend!")
                player.hp -= enemyDamage
            if (player.hp > 0) {
                console.log("\nThe Dragon hit you for " + enemyDamage + "! \nYou now have " + player.hp + " health.\n")
            } else {
                console.log("\nThe Dragon hit you for " + enemyDamage + "! \nYou have died!\n")
            }
        }
        while(bossHp > 0 && player.hp > 0) {
            dragonAttack();
            if (defeat === false) {
            dragonDefend();
            } else {
            }
        }
    } else {
        console.log("\nYou have nothing to protect yourself from the dragon flames, and like many before you burn to an ash within the dungeon.\n")
    }
}

castleFight()
