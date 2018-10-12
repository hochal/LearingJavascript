{
    // block 1
    const x = 'blue';
    console.log(x); // "blue"
}
console.log(typeof x);  // undefined
{
    // block 2
    const x = 3;
    console.log(x); // logs "3"
}
console.log(typeof x);  // undefined


{
    // outer block
    let x = 'blue';
    console.log(x); // logs "blue"
    {
        // inner block
        let x = 3;
        console.log(x); // logs "3"
    }
    console.log(x); // logs "blue"
}
console.log(typeof x);  // logs "undefined"; x out of scope

{
// outer block
    let x = {
        color: "blue"
    };
    let y = x;
    let z = 3;
    {
        // inner block
        let x = 5;
        console.log(x);
        console.log(y.color);
        y.color = "red";
        console.log(z);
    }
    console.log(x.color);
    console.log(y.color);
    console.log(z);
}