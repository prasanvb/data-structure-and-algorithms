# Array Methods Reference

## Static Methods

- `Array.isArray(anyDataType)` - Returns true if the argument is an array.
- `Array.from(arrayLike [, mapFn])` - Creates a new array from an array-like or iterable object.

## Adding/Removing Elements (Mutating)

- `arr.push(anyDataType)` - Adds elements to the end of the array.
- `arr.unshift(anyDataType)` - Adds elements to the beginning of the array.
- `arr.pop()` - Removes and returns the last element.
- `arr.shift()` - Removes and returns the first element.
- `arr.splice(startIndex, count, item1, ..., itemN)` - Removes/replaces elements and adds new ones in place.

## Sorting and Reversing (Mutating)

- `arr.sort([compareFunction])` - Sorts the array in place.
  - Default: lexicographical order.
  - `arr.sort((a,b) => a-b)` - Ascending numeric.
  - `arr.sort((a,b) => b-a)` - Descending numeric.
- `arr.reverse()` - Reverses the array in place.

## Searching

- `arr.indexOf(anyDataType, startIndex)` - Returns the first index of the element, or -1 if not found. Supports negative startIndex.
- `arr.lastIndexOf(anyDataType, startIndex)` - Returns the last index of the element.
- `arr.includes(anyDataType, startIndex)` - Returns true if the array includes the element. Supports negative startIndex.
- `arr.find(callback)` - Returns the first element that passes the test.
- `arr.findIndex(callback)` - Returns the index of the first element that passes the test.
- `arr.every(callback)` - Returns true if all elements pass the test.
- `arr.some(callback)` - Returns true if at least one element passes the test.

## Iteration and Transformation

- `arr.forEach(callback)` - Executes a function for each element (no return value).
- `arr.map(callback)` - Creates a new array with results of calling a function for every element.
- `arr.filter(callback)` - Creates a new array with elements that pass the test.
- `arr.reduce(callback, initialValue)` - Reduces the array to a single value.
- `arr.reduceRight(callback, initialValue)` - Same as reduce but from right to left.

## Extraction and Copying

- `arr.slice(startIndex, endIndex)` - Returns a shallow copy of a portion of the array (endIndex exclusive, supports negative indices).
- `arr.concat(array1, array2, ..., arrayN)` - Returns a new array by concatenating arrays.

## Filling and Copying Within (Mutating)

- `arr.fill(anyDataType, startIndex, endIndex)` - Fills the array with a value from start to end.
- `arr.copyWithin(targetIndex, startIndex, endIndex)` - Copies part of the array to another location within the same array.

## Flattening

- `arr.flat([depth])` - Flattens nested arrays up to the specified depth (default 1).

## Conversion to String

- `arr.toString()` - Returns a string of comma-separated values.
- `arr.join(separator)` - Joins elements into a string with the specified separator (default ',').

## Iterators

- `arr.keys()` - Returns an iterator for indices.
- `arr.values()` - Returns an iterator for values.
- `arr.entries()` - Returns an iterator for [index, value] pairs.
