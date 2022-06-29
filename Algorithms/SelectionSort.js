let myArray = [4, 2, 6, 5, 1, 3];

function selectionSort(array) {
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

console.log("selectionSort = " + selectionSort(myArray));
