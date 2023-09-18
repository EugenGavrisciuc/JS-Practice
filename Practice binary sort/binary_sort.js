var array = [1, 5, 4, 2, 6, 3, 8, 2, 1, 5, 9, 11, 60, 55, 1231, 5, 1, 8];
var arrayModified = [array[0]];

for(var i = 0; i < array.length - 1; i++){
    verifyLoop: for(var j = 0; j < arrayModified.length; j++) {
        if(array[i+1] < arrayModified[j]) {
            var tempArray = [];
            var n = j;
            for (var m = 0; m < arrayModified.length - j; m++){
                tempArray[m] = arrayModified[n];
                n++;
            }
                arrayModified[j] = array[i+1];
                for (var x = 0; x < tempArray.length; x++){
                    arrayModified[j+1] = tempArray[x];
                    j++;
                }
        } else {
            if (j === arrayModified.length - 1) {
                arrayModified[i+1] = array[i+1];
                break verifyLoop;
            }
        }
    }
}

console.log(arrayModified);