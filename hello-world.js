const text = "Hello, World!";
console.log(text);

// Variables
// const
const name1 = "Dana Raga";
name1 = "Raga Dana"; // This will cause an error

// let
var name2 = "Dana Raga";

if (true) {
  var name2 = "Raga Dana"; // This will reassign the variable
  console.log(name2); // Raga Dana
}

console.log(name2); // Raga Dana


var name3 = "Dana Raga";
var name3 = "Raga Dana";

if (true) {
    console.log(name3); // Raga Dana
}

console.log(name3); // Raga Dana

var name4 = "Dana Raga";
if (true) {
    let name4 = "Raga Dana"; // This will create a new variable scoped to the block
    console.log(name4); // Raga Dana
}

console.log(name4); // Dana Raga

// End Variables
// Template Literals or Template Strings

let name5 = "Dana Raga";
let gender = "Laki-laki";

console.log(name5 + "dan saya berjenis kelamin: " + gender);

let name6 = "Dana Raga";
let gender1 = "Laki-laki";

console.log(`${name6} dan saya berjenis kelamin: ${gender1}`);

// End Template Literals or Strings