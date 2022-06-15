## Hash Table

- A table is created with a specific address for each box.
- Each box will hold the items are represented in `[key,value]` pair.
- Only the Key is run through the hash function and an address is generated.
- Hash functions are ONE WAY only, i.e. if you pass key through hash function an address is generated but if you pass the address the key will not be decoded.
- Hash functions are DETERMINISTIC, i.e, every time you pass the same key it will always yield same result.
- If you pass 2 different keys and if the same address is generated then a COLLISION happens. There a 2 ways to handle it.
  - SEPARATE CHAINING:`[[key1,value1], [key2,value2]]` all the keys mapped to same address are stored in the same address space.
  - LINEAR PROBING: Looks for next available empty box in the table to store the item. It is also called OPEN ADDRESSING.
- Big O of Hash table: Even though if we use SEPARATE CHAINING where the Big O is O(n), since in the real world scenario HashTable are big and collisions are very rare so `Big O of Hash table O(1)`
