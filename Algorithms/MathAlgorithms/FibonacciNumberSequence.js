
// [ 0,  1,  1,  2,  3, 5,  8, 13, 21, 34, 55, 89]
// Idea: Except the initial default seed [0,1] each number is sum 2 adjacent number to its left.
// Big O: O(n)

function fibonacciSequence(n) {

  // Important Note: Default seeds for Fibonacci sequence are 0 and 1.
  let retArray = [0,1]
  
  for(let i=1; i<=n; i++){
    let retArrayConsNum = retArray.slice(-2);
    let retArrayConsSum = retArrayConsNum[0]+retArrayConsNum[1];
    if(retArrayConsSum === i){
      retArray.push(i);
    }
  }
  
  console.log(retArray);
  return retArray;
}

fibonacciSequence(100);
