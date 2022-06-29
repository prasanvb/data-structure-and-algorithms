const myArray = [4, 2, 6, 5, 1, 3];

function bubbleSort(array) {
  let arr = array.slice();
  let iterator = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < arr.length - 1; j++) {
      iterator++;
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log({ iterator });
  return arr;
}

// this logic has lesser number of iterations
function bubbleSort_Alternate(array) {
  let arr = array.slice();
  let iterator = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      iterator++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log({ iterator });
  return arr;
}

console.log("bubbleSort = " + bubbleSort(myArray));

console.log("bubbleSort_Alternate = " + bubbleSort_Alternate(myArray));
