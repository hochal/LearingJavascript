console.log('before block');
{
    console.log('inside block');
    constx = 3;
    console.log(x); // 3
}
console.log(`outside block; x=${x}`);   // ReferenceError: x is not defined
