import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function repeat(amount, type) {
    let line = ""
    for (let i = 0; i < amount; i++) {
        line += type;
    }
    return line;
}

const height = await userInput.question("Give the height of the star: ");

if (height % 2 == 0) {
    const half_height = height / 2;
    let star_amount = 0
    for (let i = 1; i <= half_height; i++) {
        var line = "";
        star_amount += 2;
        let position = half_height - i;
        line = repeat(position, " ");
        line += "*";
        line += repeat((star_amount - 2), " ");
        line += "*";
        console.log(line);
    }
    console.log(line);
    for (let i = half_height; i >= 1; i--) {
        line = ""
        star_amount -= 2;
        let position = half_height - i;
        line = repeat(position, " ");
        line += "*";
        line += repeat((star_amount), " ");
        line += "*";
        console.log(line)
    }
}
else {
    const middle_heigth = (height / 2) + 0.5;
    var star = "";
    for (let i = 0; i < middle_heigth; i++) {
        star += " ";
    }
    star += "*"
    console.log(star)
    var star_amount = 3
    for (let i = 1; i < middle_heigth; i++) {
        star = ""
        let position = middle_heigth - i;
        star = repeat(position, " ");
        star += "*";
        star += repeat((star_amount - 2), " ");
        star += "*";
        console.log(star);
        star_amount += 2;
    }
    star_amount -= 2;
    for (let i = middle_heigth; i >= 0; i--) {
        let position = middle_heigth - i;
        star = "";
        star = repeat(position, " ");
        star += "*";
        if (star_amount ) {
            star += repeat((star_amount), " ");
        }    
        else {
            star_amount += " "
        }   
        if (star_amount >= 0) {
            star += "*"
        }
        console.log(star);
        if (star_amount >= 3) {
            star_amount -= 2;
        } 
        else {
            star_amount -= 3
        }
    }
}
process.exit()