import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 1234;
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your 4 digit PIN: "
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let optionAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (optionAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please enter your amount: "
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Not enough funds in account!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else {
        console.log(`Your current balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number!");
}
