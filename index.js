import inquirer from 'inquirer';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function showSplashScreen() {
    console.clear();
    console.log("Welcome to My Application\n");
    console.log("Loading...");
    await sleep(2000);
}
async function main() {
    await showSplashScreen();
    function printStyledTextP(text, styleCode, colorCode, bgColorCode) {
        console.log(`\x1b[${styleCode};${colorCode};${bgColorCode}m${text}\x1b[0m`);
    }
    printStyledTextP("WELCOME TO THE WORLD OF COMPUTING", "3", "33", "40");
    printStyledTextP("FIXING YOUR PROBLEMS IN NO TIME....", "1", "97", "45");
    printStyledTextP("CALCULATOR", "4", "32", "47");
    function printStyledText(text, styleCode, colorCode, bgColorCode) {
        console.log(`\x1b[${styleCode};${colorCode};${bgColorCode}m${text}\x1b[0m`);
    }
    const textP = "DEVELOPED BY KOMAL BABAR";
    const PCode = "95";
    const bgColorCode = "35";
    const styleCodeP = "1";
    printStyledText(textP, styleCodeP, PCode, bgColorCode);
    function add(x, y) {
        return x + y;
    }
    function subtract(x, y) {
        return x - y;
    }
    function multiply(x, y) {
        return x * y;
    }
    function divide(x, y) {
        if (y === 0) {
            throw new Error("Division by zero");
        }
        return x / y;
    }
    async function calculate() {
        const { num1, num2, operator } = await inquirer.prompt([
            {
                type: 'number',
                name: 'num1',
                message: 'Enter the first number:',
            },
            {
                type: 'number',
                name: 'num2',
                message: 'Enter the second number:',
            },
            {
                type: 'list',
                name: 'operator',
                message: 'Select the operation:',
                choices: ['+', '-', '*', '/'],
            },
        ]);
        let result;
        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                console.log("Invalid operator");
                return;
        }
        printStyledTextP("RESULT", "1", "97", "45");
        console.log(result);
    }
    calculate();
}
main();
