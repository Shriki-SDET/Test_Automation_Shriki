console.log("Welcome to Callback Function")

function test1(calltest1, calltest2)
{
    console.log("Test1");
    calltest1();
    calltest2();
}

function test2()
{
    console.log("Test2");
}

function test3()
{
    console.log("Test3");
}

test1(test2, test3);