// A number is Prime number if it is divisible only by 1 or by itself (i.e. it is not a product of 2 smaller numbers)
// Big O: O(n)

function primeNumberChecker(n) {
  
  if(n < 2) return false;
  for(let i=2; i<=n; i++){
    if(n >i && n%i===0) return false;
  }
  
  return true
}

console.log(primeNumberChecker(79));
