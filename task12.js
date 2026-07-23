let units = Number(prompt("Enter Units:"));
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 4);
} else {
    bill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}

console.log("Total Bill:", bill);