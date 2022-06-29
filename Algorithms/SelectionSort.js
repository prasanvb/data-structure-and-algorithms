function logger(value) {
  console.dir(value, { depth: null });
  console.log("-----------------------");
}

let myArray = [3, 7, 1, 8, 4, 6, 9, 2];

function selectionSort(arr) {
  // logger({ arr });
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
      console.log({ iterator });
    }
    logger(arr);
  }
  return arr;
}

logger("Selection Sort = " + selectionSort(myArray));
