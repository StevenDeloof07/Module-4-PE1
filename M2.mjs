import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let starttop = false;
let startleft = false;
let height = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;

function duplicate_string(amount, type) {
    let line = ""
    for (let j = 1; j <= amount; j++) {
        line += type;
    }
    return line;
}

if (starttop) {
    if (startleft){
        for (let i = 1; i <= height; i++) {
            console.log(duplicate_string(i, "*"));
        }
    } 
    else {
        for (let i = height; i >= 1; i--) {
            console.log(duplicate_string((i- 1), " ") + duplicate_string(((height - i) + 1), "*"));
        }
    }
}
else {
    if (startleft) {
        for (let i = height; i >= 1; i--) {
            console.log(duplicate_string(i, "*"));
        }
    }
    else {
        for (let i = height; i >= 1; i--) {
            console.log(duplicate_string((height - i), " ") + (duplicate_string(i, "*")));
        }
    }
}
process.exit();