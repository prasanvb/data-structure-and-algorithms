function logger(value) {
  console.dir(value, { depth: null });
  console.log("-----------------------");
}

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      // if there is no item in the index, first create an empty array then push the key value pair
      this.dataMap[index] = [];
    }
    // if there are existing items in the index, then directly push the key value pair to the existing array
    this.dataMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      if (this.dataMap[index][0][0] === key) {
        return this.dataMap[index][0][1];
      }
      if (this.dataMap[index].length > 1) {
        for (let i = 0; i < this.dataMap[index].length; i++) {
          if (this.dataMap[index][i][0] === key)
            return this.dataMap[index][i][1];
        }
      }
    }
    return false;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

/* ----- HashTable Creation ----- */
let myHashTable = new HashTable();
logger(myHashTable);

/* ----- SET method ----- */
myHashTable.set("screws", 8000);
myHashTable.set("bolts", 10000);
myHashTable.set("washers", 12000);
myHashTable.set("lumber", 5600);

logger(myHashTable);

/* ----- GET method ----- */

// logger(myHashTable.get("screws"));
// logger(myHashTable.get("bolts"));
// logger(myHashTable.get("drywall"));

/* ----- KEYS method ----- */
logger(myHashTable.keys());
