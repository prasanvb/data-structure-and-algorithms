  // Selection Sort	
  // Time Complexity (Best | Average	| Worst): Ω(n^2) | Θ(n^2) | O(n^2)
  // space complexity (Worst): O(1)
  
  // Idea: 
  // Select the first item, compare it with all items in array.
  // If any other item in the array is smaller than first item then swap the values.
  // Exclude the sorted items and select the next item repeat the process

  // Steps
  // 1. declare minIndex variable
  // 2. create for-loop from i=0 to i < length-1 and set minIndex to i
  // 3. create for-loop from j=i+1 to j < length
  // 4. compare minIndex item value to j, if later is smaller then set minIndex to j
  // 5. repeat step 4 on rest of the items in array
  // 6. check if minIndex is still same as i, if not true swap the values on the respective indexes


let arr = [12,4,9,3,70,1e+0,4.4,1.23456e+5,3.000];

console.log("OriginalArray = " + arr);

const selectionSort = (arr) => {
  let minIndex;

  for(let i=0; i<arr.length-1; i++){
    // Important note: Initially we are assuming minIndex is first item in array
    minIndex = i;

    for(let j=i+1; j<arr.length; j++ ){
      if(arr[minIndex] > arr[j]){
        minIndex = j;
      }
    }

    if(minIndex!==i){
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log("selectionSort = " + selectionSort(arr));

const similarToSelectionSort = (arr) => {
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

// console.log(`[${similarToSelectionSort(arr)}]`);