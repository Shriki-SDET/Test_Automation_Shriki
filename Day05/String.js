console.log("Welcome to Strings");

//String
let text1 = "Virat";

//Object
let text2 = new String("Virat");

console.log(text1===text2); //False

// Declare a string using backticks.
let str = `November`;

// Declare a string containing double quotes inside single quotes.
let str1 = '"Diwali sales"';

// Declare a string containing an apostrophe using double quotes.
let str2 = "Men's Shirts";

// Declare a variable named firstName and assign the value "Rajesh".
let firstName = "Virat";

// Declare a variable named lastName and assign the value "Kumar".
let lastName = "Kohli";

console.log("My First Name is "+firstName+" and My Last Name is "+lastName);

console.log(`My First Name is ${firstName} and My Last Name is ${lastName}`);


// Find the Length of a String

let Fname = "Shreekanth";

console.log(Fname.length);

//Split the string 

let DOB = "10 OCT 1999";
let arr = DOB.split(" ");
console.log(arr[0]); // 10
console.log(arr[1]); // OCT 
console.log(arr[2]); // 1999
console.log(arr[3]); //undefined


//Extract a Portion of a String Using substring()

//           0123456789
let Lname = "Shreekanth"

console.log(Lname.substring(2,5)); //ree : The first value is indcluded and is last value is exculded
console.log(Lname.substring(0,9));// Shreekant


//  Retrieve a Character Using charAt() // It will fetch the data based on the index positon

let Course_Name = "Playwright";

console.log(Course_Name.length);
console.log(Course_Name.charAt(2));

let Dup_Course_Name = "";

for(let i=Course_Name.length-1;i>=0;i--)
{
    Dup_Course_Name = Dup_Course_Name + Course_Name.charAt(i);
}

console.log(Dup_Course_Name);

//  Find the Index of a Character Using indexOf()

console.log(Course_Name.indexOf("w")); // 4
console.log(Course_Name.indexOf("z")); // -1 : If the value is not present in the String

