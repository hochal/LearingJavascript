const f = function () {
    // ...
};

const g = function f() {
    // ...
};

const g2 = function f(stop) {
    if (stop) {
        console.log('f stopped');
    }
    f(true);
};

g2(false);