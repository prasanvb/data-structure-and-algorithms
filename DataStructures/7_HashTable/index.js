// Hash Table 
// Set to store a key-value pair
// Get to retrieve a value given its key 
// Remove to delete a key value pair
// Hashing function to convert a string key to a numeric index

// Sample Hash Table
// [[ [ 'age', 35 ] ], [ [ 'name', 'prasan' ], [ 'nema', 'venkat' ] ]]
// { index: 1, bucket: [ [ 'age', 35 ] ] }
// { index: 17, bucket: [ [ 'name', 'prasan' ], [ 'nema', 'venkat' ] ] }


// HASH TABLE METH0DS
// _hash(key) - generates hash for the key
// set(key, value) - O(1)
// get(key) - O(1)
// remove(key) -O(1)
// print() - O(n)


class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    let index = this._hash(key);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  }

  get(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      const bucket = this.table[index];
      for (let i of bucket) {
        if (i[0] === key) {
          return i[1];
        }
      }
    }

    return `${key}, Not found`;
  }

  remove(key) {
    let index = this._hash(key);

    if (!this.table[index]) {
      return `${key} not found`;
    }

    const bucket = this.table[index];
    const matchingIndex = bucket.findIndex((item) => item[0] === key);
    if (matchingIndex !== -1) {
      bucket.splice(matchingIndex, 1);
      return `${key} removed successfully`;
    } else {
      return `${key}, Not found`;
    }
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log({ index: i, bucket: this.table[i] });
      }
    }
  }
}

const htb = new HashTable(20);

htb.set("name", "prasan");
htb.set("age", 35);
htb.set("nema", "venkat");
htb.set("ega", 6);

console.log("name:", htb.get("name"));
console.log("nema:", htb.get("nema"));
console.log("enam:", htb.get("enam"));
console.log("age:", htb.get("age"));
console.log("hi:", htb.get("hi"));

console.log(htb.remove("ega"));
console.log(htb.remove("gea"));
console.log(htb.remove("address"));

htb.print();
