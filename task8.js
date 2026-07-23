let a = Number(prompt("Enter First Number:"));
let b = Number(prompt("Enter Second Number:"));
let c = Number(prompt("Enter Third Number:"));

if (a >= b && a >= c) {
    console.log("Largest:", a);
} else if (b >= a && b >= c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}