let myArray = [4, 2, 6, 5, 1, 3, 1];

function quickSort(array) {
  let arr = array.slice();
  // let iterator = 0;

  if (arr.length === 1) return arr;

  let leftArray = [];
  let rightArray = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // iterator++;
    if (arr[i] <= pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  // console.log({ iterator });

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot];
  } else if (rightArray.length > 0) {
    return [pivot, ...quickSort(rightArray)];
  }
}

// shorthand version
function quickSort_Alternate(array) {
  if (array.length <= 1) return array;

  let leftArray = [];
  let rightArray = [];
  let pivot = array[array.length - 1];

  for (let item of array.slice(0, array.length - 1)) {
    item <= pivot ? leftArray.push(item) : rightArray.push(item);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log("quickSort = " + quickSort(myArray));

console.log(
  "quickSort_Alternate = " +
    quickSort_Alternate([98, 54, 456, 3, 8, 1235, 1, 87, 0, 0])
);
