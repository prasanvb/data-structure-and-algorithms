// Set
// A set is a data structure that can hold a collection of values. The values however must be unique
// Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set
// Sets are dynamically sized. You don't have to declare the size of a set before creating it
// Sets do not maintain an insertion order
// Sets are iterables. They can be used with a for of loop

// Set vs Array
// Arrays can contain duplicate values whereas Sets cannot
// Insertion order is maintained in arrays but it is not the case with sets
// Searching and deleting an element in the set is faster compared to arrays

// **
// SET METHODS
// new Set() - O(n)
// add(value) - O(1)
// has(value) - O(1)
// delete(value) - O(1)
// clear()
// size
// forEach() - O(n)
// Iterators - for...of, forEach, key, values, entries
// **

// initialize set with value
const set = new Set([1, 2]);

// initialize set without value
// const set = new Set();

set.add(3);
set.add(4);
set.add(4);
set.add(5);

console.log({ set });

console.log("has 4: ", set.has(4));

console.log("size: ", set.size);

console.log("delete 3", set.delete(3));

console.log({ set });

for (const item of set) {
  console.log({ item });
}

set.forEach(i => console.log(i));

set.clear();

console.log({ set });
