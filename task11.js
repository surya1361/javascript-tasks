let salary = Number(prompt("Enter Salary:"));

if (salary > 50000) {
    console.log("Bonus: 10000");
} else if (salary > 30000) {
    console.log("Bonus: 5000");
} else {
    console.log("Bonus: 2000");
}