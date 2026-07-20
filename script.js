// Task 1

let name = "Naveen";
let employeeId = "EMP1001";
let department = "Frontend";
let salary = 25000;
let isPermanent = true;

console.log("Name :", name);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Salary :", salary);
console.log("Permanent :", isPermanent);

// ======================================
// Task 2 - Student Details
// ======================================

let student = {
    name: "Rahul",
    age: 21,
    course: "MCA",
    college: "PSNA College",
    passed: true
};

console.log("\n===== Task 2 =====");
console.log("Student Name :", student.name);
console.log("Course :", student.course);
console.log("Passed :", student.passed);

// ======================================
// Task 3 - Shopping Cart
// ======================================

let products = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log("\n===== Task 3 =====");
console.log("First Product :", products[0]);
console.log("Third Product :", products[2]);
console.log("Last Product :", products[4]);
console.log("Total Products :", products.length);

// ======================================
// Task 4 - Company Employee Database
// ======================================

let employee = {
    name: "Arun",
    designation: "Software Developer",
    salary: 35000,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

console.log("\n===== Task 4 =====");
console.log("Employee Name :", employee.name);
console.log("Designation :", employee.designation);
console.log("Second Skill :", employee.skills[1]);

// ======================================
// Task 5 - Salary Calculation
// ======================================

let basicSalary = 25000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;

console.log("\n===== Task 5 =====");
console.log("Total Salary :", totalSalary);

// ======================================
// Task 6 - GST Calculator
// ======================================

let productPrice = 4500;
let gst = 18;
let gstAmount = productPrice * gst / 100;
let finalAmount = productPrice + gstAmount;

console.log("\n===== Task 6 =====");
console.log("GST Amount :", gstAmount);
console.log("Final Amount :", finalAmount);

// ======================================
// Task 7 - Even or Odd
// ======================================

let number = 25;

console.log("\n===== Task 7 =====");
console.log(number % 2 == 0 ? "Even Number" : "Odd Number");

// ======================================
// Task 8 - Login System
// ======================================

let username = "admin";
let password = "12345";

console.log("\n===== Task 8 =====");

if (username === "admin" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}

// ======================================
// Task 9 - Voting Eligibility
// ======================================

let age = 22;

console.log("\n===== Task 9 =====");
console.log(age >= 18 ? "Eligible for Vote" : "Not Eligible");

// ======================================
// Task 10 - EMI Eligibility
// ======================================

let salary1 = 40000;
let experience = 3;

console.log("\n===== Task 10 =====");

if (salary1 > 30000 && experience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// ======================================
// Task 11 - Product Discount
// ======================================

let price = 5000;
let discount = 10;
let discountAmount = price * discount / 100;
let finalPrice = price - discountAmount;

console.log("\n===== Task 11 =====");
console.log("Discount Amount :", discountAmount);
console.log("Final Price :", finalPrice);

// ======================================
// Task 12 - User Registration
// ======================================

let userName = "Surya";
let email = "surya@gmail.com";
let phone = "9876543210";
let city = "Dindigul";

console.log("\n===== Task 12 =====");
console.log("----- User Details -----");
console.log("Name :", userName);
console.log("Email :", email);
console.log("Phone :", phone);
console.log("City :", city);

// ======================================
// Task 13 - Social Media Profile
// ======================================

let profile = {
    username: "surya123",
    followers: 500,
    following: 250,
    posts: 35,
    verified: false
};

console.log("\n===== Task 13 =====");
console.log("Username :", profile.username);
console.log("Followers :", profile.followers);
console.log("Verified :", profile.verified);

// ======================================
// Task 14 - Restaurant Menu
// ======================================

let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];

console.log("\n===== Task 14 =====");
console.log("Second Item :", menu[1]);
console.log("Fourth Item :", menu[3]);
console.log("Last Item :", menu[4]);

// ======================================
// Task 15 - Banking System
// ======================================

let accountBalance = 25000;
let withdraw = 8000;
let remainingBalance = accountBalance - withdraw;

console.log("\n===== Task 15 =====");
console.log("Remaining Balance :", remainingBalance);

// ======================================
// Task 16 - Mobile Store
// ======================================

let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;
let finalMobilePrice = mobilePrice - exchange - coupon;

console.log("\n===== Task 16 =====");
console.log("Final Amount :", finalMobilePrice);

// ======================================
// Task 17 - Employee Promotion
// ======================================

let exp = 5;
let performance = true;

console.log("\n===== Task 17 =====");

if (exp >= 5 && performance) {
    console.log("Promotion Approved");
} else {
    console.log("Promotion Pending");
}

// ======================================
// Task 18 - Movie Ticket
// ======================================

let ticketPrice = 180;
let people = 5;
let totalAmount = ticketPrice * people;

console.log("\n===== Task 18 =====");
console.log("Total Amount :", totalAmount);

// ======================================
// Task 19 - Weather App
// ======================================

let temperature = 38;

console.log("\n===== Task 19 =====");
console.log(temperature > 35 ? "Hot Day" : "Normal Weather");

// ======================================
// Task 20 - Mini HR Management
// ======================================

let employeeDetails = {
    empCode: "EMP1001",
    name: "Rahul",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("\n===== Task 20 =====");
console.log("Employee Code :", employeeDetails.empCode);
console.log("Employee Name :", employeeDetails.name);
console.log("Department :", employeeDetails.department);
console.log("Salary :", employeeDetails.salary);
console.log("Last Skill :", employeeDetails.skills[3]);
console.log("Permanent :", employeeDetails.permanent);