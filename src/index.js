
exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  }
  let minNumber = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        } 
    }
    return minNumber;
}

exports.max = function max (array) {
  if (!array || !array.length) {
    return 0;
  }
  let minNumber = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > minNumber) {
            minNumber = array[i];
        } 
    }
    return minNumber;
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  }
  var sum = 0;
   for (var i = 0; i < array.length; i++) {
       sum += array[i];
   }
   return sum / array.length;
}
