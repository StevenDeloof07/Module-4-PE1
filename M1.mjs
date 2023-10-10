import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let number = 8;
let line = "";
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
        line += i;  
    }
    console.log(line);
    line = "";
}
process.exit();