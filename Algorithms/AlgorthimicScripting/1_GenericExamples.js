function logger(x){
  console.log(x);
}
/*
--------------------------------------------------------------------------------------------------------------
  Sum All Numbers in a Range
  We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
*/
function sumAll(arr) {
  // Steps
  // Determine min and max number
  // use for loop to iterate from min to max number
  // sum the numbers as you iterate

  let min, max;
  if(arr[0] > arr[1]){
    min = arr[1];
    max = arr[0];
  } 
  else {
    min = arr[0];
    max = arr[1];
  }

  let sum = 0;
  for(let i = min; i <= max; i++){
     sum = sum + i;
  }

 return sum;
}

// logger(sumAll([100, 4]));


/*
--------------------------------------------------------------------------------------------------------------
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  // Steps
  // 1. create a new empty array
  // 2. Take each item in the first array and iterate it through the second array to find it exits 
  // 3. If the item from first array doesn't match the in the second array, the push it to the new array
  // 4. Repeat step 2 and 3 for the second array
  // 5. return the newArray

  const newArr = [];
  arr1.forEach(element => {
    if(!arr2.includes(element)) newArr.push(element);
  });

  arr2.forEach(element => {
    if(!arr1.includes(element)) newArr.push(element);
  });

  return newArr;
}

// logger(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));


/*
  --------------------------------------------------------------------------------------------------------------
  Seek and Destroy
  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
  Note: You have to use the arguments object.
*/

function destroyer(...arg) {
  // Steps
  // 1. convert the input parameters to arguments object 
  // 2. splice the first element in the arguments object
  // 3. create a new empty array
  // 4. take each value from the splicedArray and check if its included in the argArray
  // 5. if false then push it to the new array
  
  const splicedArray = arg.splice(0,1).flat();
  const argArray = arg;
  
  let returnArray = [];
  splicedArray.forEach(element => {
    if(!argArray.includes(element)) returnArray.push(element)
  })

  return returnArray;
}

// logger(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
// logger(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// logger(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));


/*
  --------------------------------------------------------------------------------------------------------------
  Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

  For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }
*/

function whatIsInAName(collection, source) {
  // steps
  
  const arr = [];
  let sourceKeys = Object.keys(source);
  // logger(sourceKeys)

  for(let record of collection){
    let hasAllKeyValues = true;
    for(let key of sourceKeys){
      if(record[key] !== source[key]){
        hasAllKeyValues = false;
        // logger(record);
        break;
      }
    }
    if(hasAllKeyValues) arr.push(record);
  }
  // logger(arr)
  return arr;
}

logger(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
logger(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
logger(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


/*
  --------------------------------------------------------------------------------------------------------------
  Example : A pangram is a string that contains every letter of the alphabet.
*/

let s = 'We promptly judged antique ivory buckles for the next prize';

function pangramChecker(s) {
    let result = new Set(s.replaceAll(' ','').toLowerCase());

    return (result.size === 26) ? 'pangram' : 'not pangram';
}

console.log(pangramChecker(s));