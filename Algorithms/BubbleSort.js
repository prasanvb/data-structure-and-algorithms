const myArray = [4, 2, 6, 5, 1, 3];

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // console.log({ i });
    // console.log(arr + " ---------------");
    for (let j = 0; j < i; j++) {
      // console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      // console.log(arr);
    }
  }
  return arr;
}

console.log(bubbleSort(myArray));
