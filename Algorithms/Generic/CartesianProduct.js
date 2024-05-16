// Cartesian product
// In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB,
// is the set of all ordered pairs (a, b) where a is in A and b is in B
// const A = [1, 2]
// const B = [3, 4]
// AxB = [ [1, 3], [1, 4], [2, 3], [2, 4] ]

const cartesianProduct = (arr1, arr2) => {
  let tempArr = [];

  for (let i of arr1) {
    for (let j of arr2) {
      tempArr.push([i, j]);
    }
  }

  return tempArr;
};

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2));
