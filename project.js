// 1. Deposit some money
// 2. Determine number of lines to bet
// 3. Collect a bet amount
// 4. Spin the slot machine 
// 5. Check if the user one 
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();


const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid dpeosit amount, try again");
        } else {
            return numberDepositAmount;
        }
    }
}

deposit();