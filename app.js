const getFullName = require("./names.js");
const getHobbies = require("./hobbies.js");

let firstName = "Gino";
let lastName = "Pino";

let hobbyOne = "Calcio";
let hobbyTwo = "Musica";
let hobbyThree = "Ginnastica";

const result = getFullName.fullName(firstName, lastName);
const result2 = getHobbies.hobbies(hobbyOne, hobbyTwo, hobbyThree);


const combine = () => {
    let person = {
        fullName: result,
        hobbies: result2.hobbies
    }
    console.log(person);
}

combine();