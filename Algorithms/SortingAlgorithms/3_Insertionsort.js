  // Insertion Sort	
  // Time Complexity (Best | Average	| Worst): Ω(n) | Θ(n^2) | O(n^2)	
  // space complexity (Worst): O(1)

  // Idea
  // Assumption first item in the array is sorted, always starts with second item
  // Now compare the second item to the item left and swap it if it greater than the item in the left

  // Steps
  // 1. first for loop iterates from 1 to array length, and has numberToBeInserted variable
  // 2. second while loop does the comparison and switching
  // 3. after while loop, we increment the while loop variable
  
let arr = [12,4,9,3,70,1e+0,4.4,1.23456e+5,3.000];

console.log("OriginalArray = " + arr);

const insertionSort = (arr) => {
  
  for(let i=1; i<arr.length; i++){
    let numberToBeInserted = arr[i];
    let j=i-1;
    // console.log(j, arr[j]);

    while(j >= 0 && (arr[j]>numberToBeInserted)){
      // Note: Carefully observe how the assignment happens here
      arr[j+1]=arr[j];
      j--;
    }
    
    // IMPORTANT NOTE:
    // The value of j when we reach this line will have already been decremented by 1 by the while loop
    // console.log(j, arr[j]);
    arr[j+1] = numberToBeInserted;
  }
  
  return arr;
}

console.log("insertionSort = " + insertionSort(arr));
  

  
// Insertion sort using for loop

let myArray = [4, 2, 6, 5, 1, 3];
function insertionSort_2(array) {
  let arr = array.slice();
  let temp;
  let iterator = 0;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    // IMPORTANT NOTE: 
    // If we use let the scope of the variable is restricted to for loop
    // var is used here, because we want to access it outside the for loop. 
    for (j = i - 1; arr[j] > temp && j > -1; j--) {
      iterator++;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  // console.log({ iterator });
  return arr;
}


console.log("insertionSort_2 = " + insertionSort_2(myArray));

