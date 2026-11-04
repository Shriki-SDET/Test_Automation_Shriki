const test = require("node:test");

console.log("Welcome to Arrays");

// Array Creation 1
let arr = [10, 'test', 50];

console.log(arr); // [10, 'test', 50]
console.log(typeof arr); // object

//Array Creation 2
const Arr2 = new Array(20, 30, 90);
console.log(Arr2);
console.log(typeof Arr2);

// Index
let test1 = [10, 20, 30, 40, 50];
console.log(test1[2]);
console.log(test1[0]);

// Add/Remove

let test2 = [10, "ABC", 30, "MNO", 50];

// Ascdending Order
for(let i =0; i<test2.length; i++)
{
    console.log(test2[i]);
}

console.log("+++++++++++++++++++++++++++++++");

// Descding Order
for(let i=test2.length-1; i>=0; i--)
{
    console.log(test2[i]);
}

console.log(test2);


//push method : Adding the element @ the end
test2.push("XYZ");
console.log(test2); // [10, 'ABC', 30, 'MNO', 50, 'XYZ' ]

//unshift Method : Adding the element @ the first
test2.unshift("Shriki");
console.log(test2); // [ 'Shriki', 10, 'ABC', 30, 'MNO', 50, 'XYZ' ]

// Pop Method : Removing the element @ the end
test2.pop();
console.log(test2); // [ 'Shriki', 10, 'ABC', 30, 'MNO', 50, 'XYZ' ]

// Shift Method : Removing the element @ the First
test2.shift();
console.log(test2) // [ 'Shriki', 10, 'ABC', 30, 'MNO', 50 ]

// Slice Method : 

