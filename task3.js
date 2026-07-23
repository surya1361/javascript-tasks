let balance = 10000;
let withdraw = Number(prompt("Enter Withdrawal Amount:"));

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Transaction Success");
    console.log("Balance:", balance);
} else {
    console.log("Insufficient Balance");
}