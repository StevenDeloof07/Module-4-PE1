import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function top_bottom(size) {
    let line = "";
    for (let j = 0; j < size; j++) {
        line += "*";
    }
    return line;
}

const height = parseInt(await userInput.question("Geef de hoogte: "));
const width = parseInt(await userInput.question("Geef de breedte: "));

console.log(top_bottom(width));
let line;
for (let i = 0; i < (height - 2); i++) {
    line = "*";
    for (let j = 1; j <= (width - 2); j++) {
        line += " ";
    }
    line += "*";
    console.log(line);
}

console.log(top_bottom(width));
process.exit();