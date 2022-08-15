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