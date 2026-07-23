let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;

console.log("Total:", total);

if (total > 1000) {
    let discount = total * 0.10;
    total = total - discount;

    console.log("10% Discount Applied");
    console.log("Final Total:", total);
}