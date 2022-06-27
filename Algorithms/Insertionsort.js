const myArray = [4, 2, 6, 5, 1, 3];

function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([4, 2, 6, 5, 1, 3]));

// const myArray = [454645645, 2, 6, 33, 24, 5, 1, 190];

// function insertionSort_alternate(arr) {
//   let temp;
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (j === arr.length - 2) return arr;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i - 1]) {
//         temp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = temp;
//       }
//     }
//     console.log(arr);
//   }
//   return arr;
// }

// console.log(insertionSort_alternate(myArray));
