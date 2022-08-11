  // Selection Sort	
  // Time Complexity (Best | Average	| Worst): Ω(n^2) | Θ(n^2) | O(n^2)
  // space complexity (Worst): O(1)
  
  // Idea: 
  // Select the first item, compare it with all items in array.
  // If any other item in the array is smaller than first item then swap the values.
  // Exclude the sorted items and select the next item repeat the process

  // steps
  // 1. first for loop iterates from 0 to array length-1
  // 2. second for loop iterates from 1 to array length and does the comparison and swapping 


let arr = [12,4,9,3,70,1e+0,4.4,3.000,1.23456e+5];

const selectionSort = (arr) => {

  let iterator = 0;
  for(let i=0;  i<arr.length-1; i++){
    for(let j=i+1; j <arr.length; j++){
      iterator++;
      if(arr[j] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      }
    }
    // console.log(`[${arr}]`);
  }
  console.log({ iterator });
  return arr;
}

console.log(`[${selectionSort(arr)}]`);


// Alternate old School Approach
function selectionSort_alternate(array) {
  let arr = array.slice();
  let iterator = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      iterator++;
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  console.log({ iterator });
  return arr;
}

console.log(`[${selectionSort_alternate(arr)}]`);


console.log(`Original Array ${arr}`);