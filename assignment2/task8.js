// Task 8: Electricity Bill

let customerName = "Ravi";
let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Customer Name:", customerName);
console.log("Units:", units);
console.log("Bill Amount: ₹" + bill);