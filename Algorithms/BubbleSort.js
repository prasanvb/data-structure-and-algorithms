let arr = [12,4,9,3,70,1e+0,4.4,3.000];

console.log(arr);

const bubbleSort = (arr) => {
  // steps
  // 1. (inner) for loop to compare adjacent items in an array and 
  // swap the largest item to the right
  // 2. (outer) for loop repeat step 1, but exclude the already 
  // sorted items in the array 
  
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