var computer = {
    color: "black",
    price: 1000,
    isLaptop: false,
    write: function() {
        console.log("The computer is " + this.color + " and costs " + this.price + ".")
    }
}

var backpack = {
    colorMain: "blue",
    colorSecond: "orange",
    isBackpack: true,
    itemsHold: 10,
    write: function() {
        console.log("The backpack is " + this.colorMain + " and " + this.colorSecond + " and can hold " + this.itemsHold + " items.")
    }
}

var window = {
    height: 4,
    width: 2,
    isBroken: true,
    write: function() {
        console.log("The window is " + (this.height*this.width) + " square feet")
    }
}
