const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  // console.log({arr});

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  // console.log({leftArr, pivot, rightArr});

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort([4, 3, -8, 7, -1, 87, 0]));
