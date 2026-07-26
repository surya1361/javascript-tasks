// Task 11: Product Discount

let productName = "Laptop";
let price = 60000;

let discount;
let finalPrice;

if (price > 5000) {
    discount = price * 0.20;
} else {
    discount = price * 0.10;
}

finalPrice = price - discount;

console.log("Product:", productName);
console.log("Original Price:", price);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);