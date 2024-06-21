// reduce method = it will perform full functionality in a smaller syntax
 // using reduce optimisation of code is done and the code becomes more usable 
// acc = accumulator  it stores the result and updates it further
// current = it stores the value that is coming one by one




let arrred = [1,2,3,4,5,6];
function sum(arrred) {
  let sum = 0 ;
  for (i = 0 ; i < arrred.length; i++) {
    sum = sum + arrred[i];
  }
  return sum;
}
console.log(sum(arrred));
let sumval = arrred.reduce(function func(sum , curr){
    sum = sum + curr;
    return sum;
}, 0);

