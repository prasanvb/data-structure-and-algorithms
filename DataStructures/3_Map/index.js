// Мар
// A map is an unordered collection of key-value pairs. Both keys and values can be of any data type
// To retrieve a value, you can use the the corresponding key Maps are iterables. They can be used with a for of loop

// Object vs Map
// Objects are unordered whereas maps are ordered
// Keys in objects can only be string or symbol type whereas in maps, they can be of any type An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. A map on the other hand does not contain any keys by default
// Objects are not iterables where as maps are iterables
// The number of items in an object must be determined manually where as it is readily available with the size property in a map
// Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data

// **
// MAP METHODS
// new Map() - O(1)
// set(key, value) - O(1)
// has(key) - O(1)
// get(key) - O(1)
// delete(key) - O(1)
// size        NOTE: size is not a function, just a property of Map datatype
// clear()
// Iterators - for...of, forEach, key, values, entries
// NOTE: you can convert Object <=> Map
// **

const map = new Map([
  ["a", 1],
  ["bb", 22],
  [3, "c"],
]);

const res = map.set("d", 4);
console.log("set new key => value pair:", res);

// has
console.log("has a: ", map.has("a"));

// delete
map.delete("bb");

// get
console.log("get value of d", map.get("d"));

// size
console.log("size: ", map.size);

// Iterate map
for (const [key, value] of map) {
  console.log({ key, value });
}

// clear
console.log("clear: ", map.clear());
