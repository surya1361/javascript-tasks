let age = Number(prompt("Enter Age:"));

if (age < 5) {
    console.log("Free");
} else if (age <= 18) {
    console.log("Ticket Price: ₹100");
} else {
    console.log("Ticket Price: ₹200");
}