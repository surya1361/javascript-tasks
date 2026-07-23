
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
