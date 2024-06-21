// reduce method = it will perform full functionality in a smaller syntax
 // using reduce optimisation of code is done and the code becomes more usable 
// acc = accumulator  it stores the result and updates it further
// current = it stores the value that is coming one by one



// find maximum by using reduce function ??


// Find Maximum
let arrred = [1, 2, 3, 4, 5, 6];
let maxVal = arrred.reduce(function(max, curr) {
    return Math.max(max, curr);
}, arrred[0]);
console.log("Maximum value:", maxVal);

// Find Minimum
let minVal = arrred.reduce(function(min, curr) {
    return Math.min(min, curr);
}, arrred[0]);
console.log("Minimum value:", minVal);


// if not ended in the redcue ti will go till end and then turns off ....


