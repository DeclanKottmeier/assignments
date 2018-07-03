function findMissingNo(arr){
    var test = false;
    var sortArr = arr.sort(function(a, b) {
        return a - b;
    })
        for(i = 0; i < (arr.length - 1); i++){
            if (sortArr[i] === sortArr[i+1]){
                test = true
            } else {}
        }
    if (sortArr.length < 3) {
        console.log("There must be at least 3 numbers")
    } else if (test === true) {
        console.log("Duplicates found")
    } else {
        for(i = 0; i < (sortArr.length - 1); i++){
            if ((sortArr[i] + 1) === sortArr[i+1]){
        } else {
            console.log(sortArr[i] + 1);
            i = sortArr.length;
            }
        }
    }
}

module.exports = findMissingNo;
