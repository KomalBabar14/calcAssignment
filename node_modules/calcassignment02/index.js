#! /usr/bin/env node
import inquirer from "inquirer";
import gradient from 'gradient-string';
//import figlet from 'figlet';
console.log(gradient.fruit("Welcome to CLI Calculator"));
console.log(gradient.pastel("Developed by:"));
console.log(gradient.rainbow("Lubna Kousar"));
async function Calc() {
    inquirer.prompt([
        {
            name: "Operator",
            message: "Choose Calculator Operation: ",
            type: "list",
            choices: ["Addition", new inquirer.Separator(), "Subtraction", new inquirer.Separator(), "Multiplication", new inquirer.Separator(), "Division"]
        },
        {
            name: "num1",
            message: "Enter First Number ",
            type: "number"
        },
        {
            name: "num2",
            message: "Enter Second Number: ",
            type: "number"
        }
    ])
        .then((answers) => {
        if (answers.Operator == "Addition") {
            console.log(gradient.cristal(`Answer of Addition operation is: ${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.Operator == "Subtraction") {
            console.log(gradient.atlas(`Answer of Subtraction operation is: ${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if (answers.Operator == "Multiplication") {
            console.log(gradient.retro(`Answer of Multiplication operation is: ${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.Operator == "Division") {
            console.log(gradient.instagram(`Answer of Division operation is: ${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
    });
}
Calc();
