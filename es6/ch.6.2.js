const getGreeting = require('./ch.6.1');

console.log(getGreeting());
console.log(getGreeting);

const f = getGreeting;
f();

const o = {};
o.f = getGreeting;
o.f();

const arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();