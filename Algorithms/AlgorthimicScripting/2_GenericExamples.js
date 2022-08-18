// HackerRankPrep

// Example 1
// You will be given a list of 32 bit unsigned integers. Flip all the bits (0->1 and 1->0) and return the result as an unsigned integer.

function flippingBits(n) {
  let bits = n.toString(2).padStart(32,0);
  let invertedBits = '';
  
  for(let i=0; i < bits.length; i++){
    if(parseInt(bits[i]) === 0) {
        invertedBits +=1 
    } else { 
      invertedBits +=0 
      }
  }
  return parseInt(invertedBits.toString(), 2);
}

console.log(flippingBits(9));

// 4294967286

/*--------------------------------------------------------------------------------------------------------------------*/

// Example 2
// Return a function that verifies if the number is in the given range
function makeInputVerifier(minimum, maximum) {
  return function verify(inputValue) {
    if(inputValue < minimum) {
      return 'Input is less than minimum value';
    } else if(inputValue >= minimum && inputValue <= maximum){
      return 'Input is in range';
    }else if(inputValue > maximum){
    return 'Input is more than maximum value'
    }
 }
}

let result = makeInputVerifier(10, 20);

console.log(result(12));
// Input is in range

/*--------------------------------------------------------------------------------------------------------------------*/

// Example 3
// Sliding Window Technique Demonstration
/*
  Given an array of n integers and a positive number k. We are allowed to take any k integers from the given array. The task is to find the minimum possible value of the difference between maximum and minimum of K numbers.
*/

let arr = [4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232];
let k = 5;
let n = arr.length;

// sliding window technique
function maxMin(k, arr) {
  var result = Number.MAX_VALUE;

  arr.sort((a,b)=>a-b);
  for (let i = 0; i <= arr.length - k; i++){
    console.log(arr[i], arr[i + k - 1], arr[i + k - 1] - arr[i]);
    result = Math.min(result, arr[i + k - 1] - arr[i]);
  }
  
  console.log({result})
  return result;
}

maxMin(k, arr);

/*--------------------------------------------------------------------------------------------------------------------*/
