console.log("Welcome to Functions");

//Declare Function

function test()
{
    console.log("First Function Call");
}

test(); // First Function Call

// Function with Expression

let test2 = function()
{
    console.log("Expression Function");
}
test2();// Expression Function

//Function with Parameters & Agruments

function test3 (a, b)
{
    let C = a+b;
    console.log(C);
}

test3(2,3);