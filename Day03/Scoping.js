console.log("Welcome to Scoping Section");

function test()
{
    let XYZ = true;
    let name = "Shriki";
    if(XYZ)
    {
        let name = "Shivu";
        console.log(name);
    }
    
    console.log(name);
}

test();

console.log("********************************");

function test2()
{
    var name1 = "Shriki";
    let ABC = true;
    if(ABC)
    {
     var name1 = "Shivu";
        console.log(name1);
    }
    
    console.log(name1);
}

test2();