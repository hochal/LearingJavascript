const o = {
    name: 'Wallace',
    speak() {
        return `My name is ${this.name}!`;
    }
};

o.speak();

const speak = o.speak;
speak === o.speak;  //true;
speak();    //'My name is undefined!'


// const o2 = {
//     name: 'Julie',
//     greetBackwards: function () {
//         function getReverseName() {
//             let nameBackwards = '';
//             for (let i = this.name.length - 1; i >= 0; i--) {
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         }
//
//         return `${getReverseName()} si eman ym ,olleH`;
//     }
// };
// o2.greetBackwards();

const o3={
    name: 'Julie', greetBackwards: function() {
        const self = this; function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards; }
        return `${getReverseName()} si eman ym ,olleH`; },
};
o3.greetBackwards();

console.log(o3.greetBackwards());