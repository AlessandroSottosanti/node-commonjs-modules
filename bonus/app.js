
// Richiami delle funzioni
import { name } from "./modules/names.js";
import { getHobbiesList } from "./modules/hobbies.js";

// Importo un modulo esterno
import chalk from 'chalk';


// Dati
let firstName = "Franco";
let lastName = "Ponte";

let hobbyOne = "Ippica";
let hobbyTwo = "Equitazione";
let hobbyThree = "Tennis";


// Esecuzione
const fullName = name.somma(firstName, lastName);
const hobbiesList = getHobbiesList(hobbyOne, hobbyTwo, hobbyThree);

const combine = () => {
    let person = {
        name: fullName,
        hobbies: hobbiesList.hobbies
    }
    return person;
}

const personInfo =  combine();


// Output
console.log(chalk.green.bold(`Nome: ${personInfo.name}`));
console.log(chalk.blue(`Hobby: ${personInfo.hobbies.join(', ')}`));