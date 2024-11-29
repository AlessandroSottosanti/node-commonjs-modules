
// Richiami delle funzioni
const getFullName = require("./modules/names.js");
const getHobbies = require("./modules/hobbies.js");

// Dati
let firstName = "Gino";
let lastName = "Pino";

let hobbyOne = "Calcio";
let hobbyTwo = "Musica";
let hobbyThree = "Ginnastica";


// Esecuzione
const name = getFullName.fullName(firstName, lastName);
const hobbiesList = getHobbies.hobbies(hobbyOne, hobbyTwo, hobbyThree);


const combine = () => {
    let person = {
        fullName: name,
        hobbies: hobbiesList.hobbies
    }
    return person;
}

const personInfo =  combine();


// Output
console.log(personInfo);