let choice = Number(prompt("Enter Choice (1-4):"));

switch (choice) {
    case 1:
        console.log("Deposit");
        break;

    case 2:
        console.log("Withdraw");
        break;

    case 3:
        console.log("Balance");
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}