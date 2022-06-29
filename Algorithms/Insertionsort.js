let myArray = [4, 2, 6, 5, 1, 3];

function insertionSort(array) {
  let arr = array.slice();
  let temp;
  let iterator = 0;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    var j = i - 1;
    for (j; arr[j] > temp && j > -1; j--) {
      iterator++;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  console.log({ iterator });
  return arr;
}

function insertionSort_Alternate(array) {
  let arr = array.slice();
  let iterator = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      iterator++;
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }
  console.log({ iterator });
  return arr;
}

console.log("insertionSort = " + insertionSort(myArray));

console.log("insertionSort_Alternate = " + insertionSort_Alternate(myArray));
