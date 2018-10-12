const bruce = {
    name: "Bruce"
};
const madeline = {
    name: "Madeline"
};

// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
    return `Hello, I'm ${this.name}!`;
}

greet();    // "Hello, I'm !" - 'this' not bound
greet.call(bruce);  // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
greet.call(madeline);   // "Hello, I'm Madeline!" - 'this' bound to 'madeline'

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
// bruce is now
// {
//  name: "Bruce",
//  birthYear: 1949,
//  occupation: "singer"
// }
update.call(madeline, 1942, 'actress');
// madeline is now
// {
//  name: "Madeline",
//  birthYear: 1942,
//  occupation: "actress"
// }

update.apply(bruce, [1955, "actor"]);
// bruce is now
// {
//  name: "Bruce",
//  birthYear: 1955,
//  occupation: "actor"
// }
update.apply(madeline, [1918, "writer"]);
// madeline is now
// {
//  name: "Madeline",
//  birthYear: 1918,
//  occupation: "writer"
// }

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);    // equivalent to apply(bruce, newBruce)
Math.min(...arr);   // -5
Math.max(...arr);   // 15

const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
// bruce is now
// {
//  name: "Bruce",
//  birthYear: 1904,
//  occupation: "actor"
// }
updateBruce.call(madeline, 1274, "king");
// bruce is now
// {
//  name: "Bruce",
//  birthYear: 1274,
//  occupation: "king"
// };
// madeline is unchanged

const updateBruce1949 = update.bind(bruce, 1949);

updateBruce1949("singer, songwriter");
// bruce is now
// {
//  name: "Bruce",
//  birthYear: 1949,
//  occupation: "singer, songwriter"
// }
