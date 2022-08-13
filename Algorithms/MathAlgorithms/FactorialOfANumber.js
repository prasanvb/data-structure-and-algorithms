// Factorial of a Number
// In Math factorial of a non-negative integer `n` is denoted by n!, is the product of all positive integers less than or equal to n
// Factorial of 0 is 1
// Factorial of 4 is 4*3*2*1 = 24
// Big O: O(n)

function factorial(n) {
  let nFactorial = 1;
  
  for(let i=n; i>0; i--){
    nFactorial *= i
  }  
  
  console.log(nFactorial);
  return nFactorial;
}

factorial(5);
