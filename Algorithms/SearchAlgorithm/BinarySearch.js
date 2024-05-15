// Binary Search 
// Search for target index of an element in a sorted array
// Logic
// If the array is empty, return -1 as the element cannot be found.
// If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.
// If target is less than the middle element, binary search left half of the array.
// If target is greater than middle element, binary search right half of the array.


const binarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length-1);  
  }
  
  const search = (arr, target, leftIndex, rightIndex) => {
    if(leftIndex > rightIndex) {
      return -1;
    }
    
    let midIndex = Math.floor((leftIndex+rightIndex)/2);
    if(arr[midIndex] === target) {
      return midIndex;
    }
    
    if(target < arr[midIndex]) {
      return search(arr, target, leftIndex, midIndex-1);
    } else {
      return search(arr, target, midIndex+1, rightIndex);
    }
    
  }
  
  
  console.log(binarySearch([-8, -1,  0, 3, 6,  7, 9], -8));
  console.log(binarySearch([-8, -1,  0, 3, 6,  7, 9], 7));
  console.log(binarySearch([-8, -1,  0, 3, 6,  7, 9], 2));