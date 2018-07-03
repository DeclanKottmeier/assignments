var rs = require("readline-sync");
var help = true
var quiet = false
var convo1 = "find the nearest city to the east, it is a safe but a long walk. \nMake sure to stay out of the forest to the west 'less you are looking for trouble. \nIf you do decide to venture off you can purchase from my shop at any time. However it seems that you have as much gold as clothes. \nSafe travels and come back if you manage to make any gold.'\n"
var movements = ["Old Man's Cabin", "The Forest", "The City", "The Castle" , "The Graveyard"]
var townVisit = false

var player = {
    name: "Declan",
    hp: 100,
    hpMax: 100,
    damage: 10,
    enemiesKilled: 0,
    gold: 0,
    dragonHead: false,
    tombKey: false,
    fireShield: false
}

var forestNames = ["Bandit", "Ogre", "Skeleton"];
var forestWeapons = [["Rusty Dagger", 18], ["Dull Axe", 26], ["Rusty Sword", 24], ["Shortbow", 21], ["Club", 14]]
var escape = false

var graveNames = ["Draugr", "Large Skeleton", "Ghoul"];
var graveWeapons = [["Dagger", 24], ["Steel Axe", 32], ["Shortsword", 34], ["Longbow", 28], ["Spear", 22]]
var graveCount = 0

var storeItems = [[{
    name: "Chestplate",
    value: 50,
    price: 40,
    equipped: false
},
{
    name: "Helmet",
    value: 20,
    price: 20,
    equipped: false
},
{
    name: "Greaves",
    value: 30,
    price: 30,
    equipped: false
},
{
    name: "Boots",
    value: 15,
    price: 20,
    equipped: false
}],
[{
    name: "Sword",
    value: 50,
    price: 60,
    equipped: false
},
{
    name: "Battle-Axe",
    value: 40,
    price: 35,
    equipped: false
},
{
    name: "Halberd",
    value: 35,
    price: 25,
    equipped: false
}],
[{
    name: "Regular Shield",
    value: 20,
    price: 30,
    equipped: false
},
{
    name: "Dragon Shield",
    value: 50,
    price: 55,
    equipped: false
}]]

var dragonShield = false
var x = 0
var k = 0

function forestFight() {
    var forestWeapon = forestWeapons[Math.floor((forestWeapons.length) * Math.random())];
    var weaponName = forestWeapon[0]
    var weaponDamage = forestWeapon[1]
    var forestName = forestNames[Math.floor(forestNames.length * Math.random())];
    var enemyHp = Math.floor((Math.random() * 31) + 50);
    var forestGold = Math.floor((Math.random() * 16) + 5);

    function attack() {
        var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
        rs.keyInPause("Attack!");
        enemyHp -= playerAttack
        if (enemyHp > 0) {
            console.log("\nYou attacked the " + forestName + " for " + playerAttack + " hitpoints! \nThe " + forestName + " now has " + enemyHp + " health!\n")
        } else {
            console.log("\nYou have killed the " + forestName + "!\n")
            rs.keyInPause()
            if (weaponDamage > player.damage) {
                console.log("\nYou have picked up a " + weaponName + " and found " + forestGold + " gold!\n")
                player.damage = weaponDamage
                player.gold += forestGold
                player.enemiesKilled++
                rs.keyInPause()
                if (rs.keyInYN("Would you like to continue exploring the forest?")) {
                    forestFight()
                } else {
                    movement()
                }
            } else {
                console.log("\nYou have found " + forestGold + " gold!\n")
                player.gold += forestGold
                player.enemiesKilled++
                rs.keyInPause()
                if (rs.keyInYN("Would you like to continue exploring the forest?")) {
                    forestFight()
                } else {
                    movement()
                }
            }
        }
    }

    function defend() {
            var enemyDamage = Math.floor((Math.random() * 11) + 5);
            rs.keyInPause("Defend!")
            player.hp -= enemyDamage
        if (player.hp > 0) {
            console.log("\nThe " + forestName + " hit you for " + enemyDamage + "! \nYou now have " + player.hp + " health. \n")
        } else {
            console.log("\nThe " + forestName + " hit you for " + enemyDamage + "! \nYou have died!\n")
        }
    }

    console.log("\nYou have ran into a " + forestName + " carrying a " + weaponName + " !\n")
    while((enemyHp > 0 && player.hp > 0) && (escape === false)) {
        escape = Math.random() >= 0.5;
        var fightOrFlight = ["Fight!", "Run!"];
        fightOrFlight = rs.keyInSelect(fightOrFlight, "What do you want to do?");

         if ((fightOrFlight === 1) && (escape === true)) {
        console.log("\nYou have escaped!\n")
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

function city() {
    if (townVisit === false) {
        townVisit = true
        console.log("\nYou walk for a few miles until you reach the outskirts of a giant wall. When you get closer a guard stationed infront yells at you. \n'What are you doing here?!' \nAfter explaining your situtation the guard laughs at you. 'HAH! I'm not about to let some nude stranger into our city. \nGo slay a dragon or something and you can come in'\n")
        rs.keyInPause()
        console.log("\nYou ask the guard where a dragon can be found. After a few moments of awkwardness from not catching the guards sarcasm, he decides to humor you. \n'You idiot. You can find a dragon in the castle north-west of here if you'd really like, or you can save us the trouble and bury yourself in the graveyard to the south'\n")
        rs.keyInPause()
        movement()
    } else if (player.dragonHead === false) {
        console.log("\nYou approach the city gates. The guard yells, 'Nude or clothed, you are not getting in here without a dragons head!'")
        rs.keyInPause()
        movement()
    } else {
        console.log("\nYou approach the city gates. The guard yells, 'Nude or clothed, you are not getting in here without a dragons head!'\nYou reach into your bag to pull out the Dragon's head.\n'I don't believe it! You actually killed it!\nStill no shirt no service, sorry mate.'\n\nWhile you have managed to kill " + player.enemiesKilled + " enemies. You die of dysentery.\n")
    }
}

function movement() {
    movements = ["Old Man's Cabin", "The Forest", "The City", "The Castle" , "The Graveyard"]
    movements = rs.keyInSelect(movements, "Where do you want to go?")
    if (movements === 0){
        cabin();
    } else if (movements === 1){
        forest();
    } else if (movements === 2){
        city();
    } else if (movements === 3){
        if(player.dragonHead === false) {
            castle();
        } else {
            console.log("\nYou have already cleared out the castle!\n");
            keyInPause();
            movement();
        }
    } else if (movements === 4){
        if(player.tombKey === false) {
            graveyard();
        } else {
            console.log("\nYou have already cleared out the graveyard!\n");
            keyInPause();
            movement();
        }
    } else {
        movement();
    }
}

function cabinChoice() {
    var cabinChoices = ["Purchase something from the old man", "Follow the road east to the city"]
    cabinChoices = rs.keyInSelect(cabinChoices, "What do you want to do?")
    if (cabinChoices === 0) {
        cabin();
    } else if (cabinChoices === 1) {
        city();
    } else {
        cabinChoice();
    }
}

function buy(){
    if (storeItems[x][k].equipped === true) {
        console.log("\nYou already purchased a " + storeItems[x][k].name + "!\n");
        rs.keyInPause();
        if (x === 0) {
            armorShop();
        } else if (x === 1) {
            weaponShop();
        } else if (x === 2){
            shieldShop();
        } else {}
    } else if (player.gold < storeItems[x][k].price) {
        console.log("\nYou do not have enough gold!\n");
        rs.keyInPause();
        if (x === 0) {
            armorShop();
        } else if (x === 1) {
            weaponShop();
        } else if (x === 2) {
            shieldShop();
        } else {}
    } else if (x === 0){
        player.hpMax += storeItems[x][k].value;
        player.hp += storeItems[x][k].value;
        player.gold -= storeItems[x][k].price;
        storeItems[x][k].equipped = true;
        console.log("\nYou have bought a " + storeItems[x][k].name + "! You now have " + player.gold + " Gold!\n");
        rs.keyInPause();
        armorShop();
    } else if (x === 1){
        if (player.damage <= storeItems[x][k].price) {
            player.damage = storeItems[x][k].value;
            player.gold -= storeItems[x][k].price;
            storeItems[x][k].equipped = true;
            console.log("\nYou have bought a " + storeItems[x][k].name + "! You now have " + player.gold + " Gold!\n");
            rs.keyInPause();
            weaponShop();
            }
            else {
            console.log("\nYour current equipped weapon is stronger than the " + storeItems[x][k].name + "!\n");
            rs.keyInPause();
            weaponShop();
        }
    } else if (x === 2){
        if (dragonShield === false) {
            if (k === 0) {
                player.hpMax += storeItems[x][k].value;
                player.hp += storeItems[x][k].value;
                player.gold -= storeItems[x][k].price;
                storeItems[x][k].equipped = true;
                console.log("\nYou have bought a " + storeItems[x][k].name + "! You now have " + player.gold + " Gold!\n");
                rs.keyInPause();
                shieldShop();
            } else if (k === 1) {
                player.hpMax += storeItems[x][k].value;
                player.hp += storeItems[x][k].value;
                player.gold -= storeItems[x][k].price;
                dragonShield = true;
                player.fireShield = true;
                console.log("\nYou have bought a " + storeItems[x][k].name + "! You now have " + player.gold + " Gold!\n");
                rs.keyInPause();
                shieldShop();
            } else {}
        } else {
            console.log("\nYou already own the Dragon Shield!\n");
            rs.keyInPause();
            shieldShop();
        }
    } else {}
}

function shop(){
    var items = ["Armor", "Weapons", "Shields", "Heal[Max HP]: 5 Gold"]
    items = rs.keyInSelect(items, "What would you like to buy?")
    if (items === 0) {
        x = 0
        armorShop();
    } else if (items === 1) {
        x = 1
        weaponShop();
    } else if (items === 2) {
        x = 2
        shieldShop();
    } else if (items === 3) {
        x = 3
        healthShop();
    } else {
        if (townVisit === true) {
            movement();
        } else {
            cabinChoice();
        }
    }
}

function armorShop(){
    var armorPieces = ["Chestplate(50 Health): 40 Gold", "Helmet(20 Health): 20 Gold", "Greaves(30 Health): 30 Gold", "Boots(15 Health): 20 Gold"]
    armorPieces = rs.keyInSelect(armorPieces, "What armor would you like to buy?")
    if (armorPieces === 0) {
        k = 0
        buy()
    } else if (armorPieces === 1) {
        k = 1
        buy()
    } else if (armorPieces === 2) {
        k = 2
        buy()
    } else if (armorPieces === 3) {
        k = 3
        buy()
    } else {
        shop()
    }
}

function weaponShop(){
    var weaponPieces = ["Sword(50 Damage): 60 Gold", "Battle-Axe(40 Health): 35 Gold", "Halberd(35 Health): 25 Gold"]
    weaponPieces = rs.keyInSelect(weaponPieces, "What weapon would you like to buy?")
    if (weaponPieces === 0) {
        k = 0
        buy()
    } else if (weaponPieces === 1) {
        k = 1
        buy()
    } else if (weaponPieces === 2) {
        k = 2
        buy()
    } else {
        shop()
    }
}

function shieldShop(){
    var shieldPieces = ["Regular Shield(20 Health): 30 Gold", "Dragon Shield(50 Health): 55 Gold"]
    shieldPieces = rs.keyInSelect(shieldPieces, "What shield would you like to buy?")
    if (shieldPieces === 0) {
        k = 0
        buy()
    } else if (shieldPieces === 1) {
        k = 1
        buy()
    } else {
        shop()
    }
}

function healthShop() {
    if (player.hp === player.hpMax) {
        console.log("\nYour health is already full!\n")
        rs.keyInPause();
        shop()
    } else if (player.gold < 5) {
        console.log("\nYou do not have enough gold!\n")
        rs.keyInPause();
        shop()
    } else {
        player.hp = player.hpMax;
        player.gold -= 5;
        console.log("\nYou are now at " + player.hp + " HP! You now have " + player.gold + " gold!\n");
        rs.keyInPause();
        shop()
    }
}

function oldManResponse(){
    if (help === false) {
        console.log("\n'YOU UNGRATEFUL ASSHOLE! YOU CAN FORGET ABOUT GETTING ANYMORE OF MY HELP OR BUYING ANY OF MY SUPPLIES!' \nThe old man then kicks you out of his cabin and you are left alone outside.\n");
        rs.keyInPause();
        cabinChoice();
    } else if (help === true && quiet === false) {
        console.log("\n'My pleasure! \nYou'll " + convo1);
        rs.keyInPause();
        cabinChoice();
    } else {
        console.log("\n'Quiet type are ya? \nWell anyway you'll " + convo1);
        rs.keyInPause();
        cabinChoice();
    }
}

function forest() {
    if (rs.keyInYN("\nBEWARE! DANGEROUS ENEMIES AHEAD! \nDo you want to continue?\n")) {
        forestFight()
    } else {
        movement()
    }
}

function cabin() {
    if (help === false) {
        console.log("\nYou approach the cabin, but are greeted by the angry old man. \n'GET OUT OF HERE! YOU AREN'T GOING TO GET MY HELP OR SUPPLIES!\n");
        rs.keyInPause();
        rs.movement();
    } else {
        var cabinChoices = ["Purchase supplies from the old man", "Leave the cabin"];
        console.log("\nYou approach the cabin, greeted kindly by the old man\n");
        cabinChoices = rs.keyInSelect(cabinChoices, "What do you want to do?");
        if (cabinChoices === 0) {
            shop()
        } else {
            movement()
        }
    } 
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
                player.tombKey = true
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
            if (player.tombKey === false) {
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

var name = rs.question("\nYou awake in a strange bed with nothing but your underwear on. \nAn old man approaches you from within the cabin. \n'Ah you've awaken! I found you unconscious by the river and brought you in here to recover. \nMay I ask what your name is?'\n");

console.log("\nNice to meet you " + name + "! \nUnfortunately I cannot allow you to stay any longer, can't trust anyone these days. \nHowever I do have some supplies that I'd be willing to sell you at anytime.\n")

var oldManChoices = ["Thank the old man for his help", "Yell at the old man for not helping more"]

oldManChoices = rs.keyInSelect(oldManChoices, "Make a decision") 
    if (oldManChoices === 1) {
        help = false
    } else if (oldManChoices === 0) {
        help = true
    } else {
        quiet = true
    }

oldManResponse()
