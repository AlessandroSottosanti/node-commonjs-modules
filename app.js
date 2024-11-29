const getFullName = require("./names.js");
const getHobbies = require("./hobbies.js");
console.log(getFullName);
console.log(getHobbies);

let firstName = "Gino";
let lastName = "Pino";

let hobbyOne = "Calcio";
let hobbyTwo = "Musica";
let hobbyThree = "Ginnastica";

const result = getFullName.fullName(firstName, lastName);
const result2 = getHobbies.hobbies(hobbyOne, hobbyTwo, hobbyThree);

console.log(result);
console.log(result2);