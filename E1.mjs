import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let zijde1 = parseFloat(await userInput.question("Geef zijde 1: "));
let zijde2 = parseFloat(await userInput.question("Geef zijde 2: "));

const oppervlakte = zijde1 * zijde2;
console.log(oppervlakte);