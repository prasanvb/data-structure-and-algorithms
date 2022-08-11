  // Bubble Sort	
  // Time Complexity (Best | Average	| Worst): Ω(n) | Θ(n^2) | O(n^2)	
  // space complexity (Worst): O(1)

  // Idea 
  // Compare adjacent items and bubble the largest item to the end. 
  // Exclude already sorted items and repeat the process until all items are sorted.
  
  // steps
  // 1. (inner) for loop to compare adjacent items in an array and 
  // swap the largest item to the right
  // 2. (outer) for loop repeat step 1, but exclude the already 
  // sorted items in the array 


let arr = [12,4,9,3,70,1e+0,4.4,3.000,1.23456e+5];

console.log(`${arr}`);

const bubbleSort = (arr) => {
  
  for(let i=arr.length-1; i > 0; i--){
    for(let j=0; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  
  return arr;
  
}

console.log("bubbleSort = " + bubbleSort(arr));
