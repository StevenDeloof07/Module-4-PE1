import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

const start = parseInt(await userInput.question("Met welk getal starten we: "));
const eind = parseInt(await userInput.question("Met welk getal eindigen we: "));
const deler1 = parseInt(await userInput.question("Wat is het eerste getal waarop we testen: "));
const deler2 = parseInt(await userInput.question("Wat is het tweede getal waarop we testen: "));

for (let i = start + 1; i < eind; i++) {
    if (i % deler1 == 0 && i % deler2 == 0) {
        console.log(i);
    }
}