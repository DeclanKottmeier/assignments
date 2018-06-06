document.addElementById.firstCalculation.addEventListener('submit', function(e) {
    e.preventDefault()
    var first = document.firstNumber
    var second = document.secondNumber
    var final = first + second
    console.log(final)
})