const myArray = [4, 2, 6, 5, 1, 3];

function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    var j = i - 1;
    for (j; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([4, 2, 6, 5, 1, 3]));
