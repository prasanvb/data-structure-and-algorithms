const obj = {
    name: "Heisenberg",
    age: 25,
    "key-three": true,
    address: {
      num: 1234,
      street: "my street",
      pin: [1, 2, "C"],
    },
    SayMyName: function () {
      console.log(this.name);
    },
  };
  
  //Insert - O(1)
  // add new prop
  obj.hobby = "football";
  
  // Remove - 0(1)
  //delete prop
  delete obj.hobby;
  
  console.log(obj);
  
  // Access - 0(1)
  // access prop  & value
  console.log(obj.name);
  console.log(obj["age"]);
  console.log(obj["key-three"]);
  console.log(obj["new"]);
  obj.SayMyName();
  
  // Search - O(n)
  // Convert Objects to Array
  console.log("keys: ", Object.keys(obj));
  console.log("values: ", Object.values(obj));
  console.log("entries: ", Object.entries(obj));
  