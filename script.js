// ===============================
// Task 1: Employee Login System
// ===============================
let username = prompt("Task 1\nEnter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


// ===============================
// Task 2: E-Commerce Discount
// ===============================
let amount = Number(prompt("Task 2\nEnter Purchase Amount:"));

if (amount >= 5000) {
    let discount = amount * 0.20;
    let finalAmount = amount - discount;

    console.log("20% Discount Applied");
    console.log("Discount:", discount);
    console.log("Final Amount:", finalAmount);
} else {
    console.log("No Discount");
    console.log("Final Amount:", amount);
}


// ===============================
// Task 3: ATM Withdrawal
// ===============================
let balance = 10000;
let withdraw = Number(prompt("Task 3\nEnter Withdrawal Amount:"));

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Transaction Success");
    console.log("Balance:", balance);
} else {
    console.log("Insufficient Balance");
}


// ===============================
// Task 4: Student Grade System
// ===============================
let mark = Number(prompt("Task 4\nEnter Mark:"));

if (mark >= 90) {
    console.log("Grade A");
} else if (mark >= 80) {
    console.log("Grade B");
} else if (mark >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ===============================
// Task 5: Traffic Signal
// ===============================
let signal = prompt("Task 5\nEnter Signal (red/yellow/green):");

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid");
}


// ===============================
// Task 6: Online Shopping Delivery
// ===============================
let order = Number(prompt("Task 6\nEnter Order Amount:"));

let delivery;

if (order >= 1000) {
    delivery = 0;
} else {
    delivery = 80;
}

let total = order + delivery;

console.log("Order Amount:", order);
console.log("Delivery:", delivery);
console.log("Total:", total);


// ===============================
// Task 7: User Age Verification
// ===============================
let age = Number(prompt("Task 7\nEnter Age:"));

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// ===============================
// Task 8: Largest Among 3 Numbers
// ===============================
let a = Number(prompt("Task 8\nEnter First Number:"));
let b = Number(prompt("Enter Second Number:"));
let c = Number(prompt("Enter Third Number:"));

if (a >= b && a >= c) {
    console.log("Largest:", a);
} else if (b >= a && b >= c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}


// ===============================
// Task 9: Mobile Password
// ===============================
let pin = prompt("Task 9\nEnter 4-Digit PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}


// ===============================
// Task 10: Product Stock
// ===============================
let stock = Number(prompt("Task 10\nEnter Stock:"));

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}


// ===============================
// Task 11: Employee Salary Bonus
// ===============================
let salary = Number(prompt("Task 11\nEnter Salary:"));

if (salary > 50000) {
    console.log("Bonus: 10000");
} else if (salary > 30000) {
    console.log("Bonus: 5000");
} else {
    console.log("Bonus: 2000");
}


// ===============================
// Task 12: Electricity Bill
// ===============================
let units = Number(prompt("Task 12\nEnter Units:"));
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 4);
} else {
    bill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}

console.log("Total Bill:", bill);


// ===============================
// Task 13: Movie Ticket Booking
// ===============================
let movieAge = Number(prompt("Task 13\nEnter Age:"));

if (movieAge < 5) {
    console.log("Free");
} else if (movieAge <= 18) {
    console.log("Ticket Price: ₹100");
} else {
    console.log("Ticket Price: ₹200");
}


// ===============================
// Task 14: Hospital Token System
// ===============================
let patient = prompt("Task 14\nEmergency / Senior Citizen / Normal");

switch (patient) {
    case "Emergency":
        console.log("Token 1");
        break;

    case "Senior Citizen":
        console.log("Priority");
        break;

    case "Normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid");
}


// ===============================
// Task 15: Company Attendance
// ===============================
let attendance = prompt("Task 15\nPresent / Leave / Absent");

switch (attendance) {
    case "Present":
        console.log("Working");
        break;

    case "Leave":
        console.log("Leave Approved");
        break;

    case "Absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid");
}


// ===============================
// Task 16: Grocery Cart Total
// ===============================
let rice = 500;
let sugar = 300;
let oil = 250;

let cartTotal = rice + sugar + oil;

console.log("Total:", cartTotal);

if (cartTotal > 1000) {
    let discount = cartTotal * 0.10;
    cartTotal = cartTotal - discount;

    console.log("10% Discount Applied");
    console.log("Final Total:", cartTotal);
}


// ===============================
// Task 17: Array Task
// ===============================
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + ". " + products[i]);
}


// ===============================
// Task 18: Employee Database
// ===============================
let employee = {
    name: "Rahul",
    role: "Developer",
    salary: 50000
};

for (let key in employee) {
    console.log(employee[key]);
}


// ===============================
// Task 19: Type Casting
// ===============================
let number = Number("100");
let boolean = Boolean("true");
let string = String(200);

console.log(number);
console.log(boolean);
console.log(string);


// ===============================
// Task 20: Banking Menu
// ===============================
let choice = Number(prompt("Task 20\n1.Deposit\n2.Withdraw\n3.Balance\n4.Exit"));

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