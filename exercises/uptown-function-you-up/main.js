var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function singSong() {
    console.log(lyrics.join(' '));
}

singSong()

function songSang() {
    lyrics.reverse();
    console.log(lyrics.join(' '));
}

songSang()

function singitySang() {
    lyrics.reverse()
    for(var k = 0; k < lyrics.length; k++) {
    lyrics.splice((k+1),1);
    }
console.log(lyrics.join(' '))
}

singitySang()


