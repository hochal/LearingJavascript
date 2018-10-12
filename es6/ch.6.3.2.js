function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love", object: "JavaScript",
};

getSentence(o); // "I love JavaScript"

function getSentence([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];

getSentence(arr); // "I love JavaScript"

function addPrefix(prefix, ...words) {
// we will learn a better way to do this later! const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

addPrefix("con", "verse", "vex"); // ["converse", "convex"]