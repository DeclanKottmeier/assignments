document.getElementById("square").addEventListener("mouseenter", function() {
    this.style.backgroundColor = "blue";
});

document.getElementById("square").addEventListener("mousedown", function() {
    this.style.backgroundColor = "red";
});

document.getElementById("square").addEventListener("mouseup", function() {
    this.style.backgroundColor = "yellow";
});

document.getElementById("square").addEventListener("dblclick", function() {
    this.style.backgroundColor = "green";
});

document.addEventListener("wheel", function() {
    document.getElementById("square").style.backgroundColor = "orange";
});

document.addEventListener("keypress", function(e) {
    if (e.key === "b") {
    document.getElementById("square").style.backgroundColor = "blue";
    } if (e.key === "r") {
        document.getElementById("square").style.backgroundColor = "red";
    } if (e.key === "y") {
        document.getElementById("square").style.backgroundColor = "yellow";
    } if (e.key === "g") {
        document.getElementById("square").style.backgroundColor = "green";
    } if (e.key === "o") {
        document.getElementById("square").style.backgroundColor = "orange";
    } else (console.log("Incorrect Key Pressed"))
});
