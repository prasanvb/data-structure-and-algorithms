let myArray = [4, 2, 6, 5, 1, 3];

function insertionSort(array) {
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
  console.log({ iterator });
  return arr;
}


console.log("insertionSort = " + insertionSort(myArray));
