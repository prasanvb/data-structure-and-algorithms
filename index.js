function logger(value) {
  console.dir(value, { depth: null });
  console.log("-----------------------");
}

let myArray = [4, 3, 6, 5, 2, 7, 1, 8];

function splitArray(arr) {
  if (arr.length === 1) return arr;
  let pivot = arr[0];
  let leftArray = [];
  let rightArray = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  console.log(leftArray.length);
  console.log(rightArray);
  if (leftArray.length > 1) {
    splitArray(leftArray);
  } else if (rightArray.length > 1) {
    splitArray(rightArray);
  }
  return "Test";
}

function quickSort(arr) {
  logger({ arr });
  let brokenArray = splitArray(arr);
  console.log(brokenArray);
  // if (brokenArray.length === 1) return brokenArray;
}

logger("quick sorted = " + quickSort(myArray));
