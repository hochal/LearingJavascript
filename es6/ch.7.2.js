function f1() {
    console.log('one');
}

function f2() {
    console.log('two');
}

f2();
f1();
f2();

const x = 3;

function f() {
    console.log(x); // this will work
    console.log(y); // this will cause a crash
}

const y = 3;
f();