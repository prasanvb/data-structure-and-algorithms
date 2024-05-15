// Merge Sort
// Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)
// Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  let sortedArr = [];

  // note: (leftArr.length && rightArr.length)
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      // note: leftArr.shift(), rightArr.shift()
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  // console.log({sortedArr, leftArr,rightArr});

  return [...sortedArr, ...leftArr, ...rightArr];
};

console.log(mergeSort([4, 3, -8, 7, -1, 87, 0]));
