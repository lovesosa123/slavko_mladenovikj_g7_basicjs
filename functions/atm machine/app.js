alert(`Your balance is 1000$`)
let parsedAccountBalance = 1000;

function atmMachine(moneyRequested) {
    if (moneyRequested > parsedAccountBalance) {
         alert (`You requested more money than you currently have.`)
    } else {
        alert(`You have withdrawn ${moneyRequested}$, you have ${parsedAccountBalance - moneyRequested}$ left.`)
    }
}   


atmMachine(prompt(`Please how much money you want to with`))