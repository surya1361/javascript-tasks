// ======================================================
// TASK 1 – Student Registration (Variables + Objects)
// ======================================================

{
    const student = {
        name: "Jeyasurya",
        age: 22,
        department: "MCA",
        courseFee: 75000
    };

    console.log("===== TASK 1: STUDENT REGISTRATION =====");
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Department:", student.department);
    console.log("Course Fee:", student.courseFee);
    console.log("Status:", student.age >= 18 ? "Eligible" : "Not Eligible");
}


// ======================================================
// TASK 2 – Employee Salary Calculator (Functions)
// ======================================================

{
    function calculateSalary(basicSalary, bonus, deduction) {
        return basicSalary + bonus - deduction;
    }

    const basicSalary = 30000;
    const bonus = 5000;
    const deduction = 2000;

    const totalSalary = calculateSalary(
        basicSalary,
        bonus,
        deduction
    );

    console.log("\n===== TASK 2: EMPLOYEE SALARY =====");
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Deduction:", deduction);
    console.log("Total Salary =", totalSalary);
}


// ======================================================
// TASK 3 – Shopping Cart (Array)
// ======================================================

{
    let cart = [
        "Laptop",
        "Mouse",
        "Keyboard",
        "Headphone"
    ];

    // Add one product
    cart.push("Webcam");

    // Remove last product
    cart.pop();

    console.log("\n===== TASK 3: SHOPPING CART =====");
    console.log("Cart:", cart);
    console.log("Total Products:", cart.length);
    console.log("First Product:", cart[0]);
    console.log("Last Product:", cart[cart.length - 1]);
}


// ======================================================
// TASK 4 – Login Validation (If Else)
// ======================================================

{
    const storedUsername = "admin";
    const storedPassword = "12345";

    const enteredUsername = "admin";
    const enteredPassword = "12345";

    console.log("\n===== TASK 4: LOGIN VALIDATION =====");

    if (
        enteredUsername === storedUsername &&
        enteredPassword === storedPassword
    ) {
        console.log("Login Success");
    } else {
        console.log("Invalid Username or Password");
    }
}


// ======================================================
// TASK 5 – Movie Ticket Booking (Ternary)
// ======================================================

{
    const age = 20;

    const result = age >= 18
        ? "Eligible"
        : "Not Eligible";

    console.log("\n===== TASK 5: MOVIE TICKET BOOKING =====");
    console.log("Age:", age);
    console.log("Result:", result);
}


// ======================================================
// TASK 6 – Employee Search (Array + Find)
// ======================================================

{
    const employees = [
        { name: "Arun", salary: 25000 },
        { name: "Kavin", salary: 40000 },
        { name: "Ravi", salary: 55000 }
    ];

    const employee = employees.find(
        emp => emp.name === "Kavin"
    );

    console.log("\n===== TASK 6: EMPLOYEE SEARCH =====");
    console.log(employee);
}


// ======================================================
// TASK 7 – Product Filter (Filter)
// ======================================================

{
    const products = [
        { name: "Pen", price: 50 },
        { name: "Notebook", price: 150 },
        { name: "Mouse", price: 450 },
        { name: "Keyboard", price: 700 },
        { name: "Headphone", price: 1000 }
    ];

    const filteredProducts = products.filter(
        product => product.price < 500
    );

    console.log("\n===== TASK 7: PRODUCT FILTER =====");
    console.log("Products below ₹500:");

    console.log(filteredProducts);
}


// ======================================================
// TASK 8 – Student Marks (Map)
// ======================================================

{
    const marks = [45, 56, 67, 89];

    const newMarks = marks.map(
        mark => mark + 5
    );

    console.log("\n===== TASK 8: STUDENT MARKS =====");
    console.log("Original Marks:", marks);
    console.log("After Grace Marks:", newMarks);
}


// ======================================================
// TASK 9 – Attendance Checker (Every)
// ======================================================

{
    const marks = [90, 85, 70, 65];

    const result = marks.every(
        mark => mark > 50
    );

    console.log("\n===== TASK 9: ATTENDANCE CHECKER =====");
    console.log("All students scored above 50:", result);
}


// ======================================================
// TASK 10 – OTP Generator (Math + String)
// ======================================================

{
    function generateOTP() {
        return Math.floor(
            100000 + Math.random() * 900000
        ).toString();
    }

    const otp = generateOTP();

    console.log("\n===== TASK 10: OTP GENERATOR =====");
    console.log("Generated OTP:", otp);
}


// ======================================================
// TASK 11 – Password Strength Checker (String)
// ======================================================

{
    const password = "Abc@1234";

    const minimumLength = password.length >= 8;
    const containsNumber = /[0-9]/.test(password);
    const containsUppercase = /[A-Z]/.test(password);
    const containsSpecialCharacter =
        /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const strongPassword =
        minimumLength &&
        containsNumber &&
        containsUppercase &&
        containsSpecialCharacter;

    console.log("\n===== TASK 11: PASSWORD STRENGTH =====");
    console.log("Password:", password);

    if (strongPassword) {
        console.log("Strong Password");
    } else {
        console.log("Weak Password");
    }
}


// ======================================================
// TASK 12 – Product Search (Includes)
// ======================================================

{
    const products = [
        "Laptop",
        "Mobile",
        "Watch",
        "Camera"
    ];

    const searchProduct = "Mobile";

    const result = products.includes(searchProduct)
        ? "Available"
        : "Not Available";

    console.log("\n===== TASK 12: PRODUCT SEARCH =====");
    console.log("Search:", searchProduct);
    console.log("Result:", result);
}


// ======================================================
// TASK 13 – Current Digital Clock
// Date + setInterval
// ======================================================

{
    function displayClock() {
        const now = new Date();

        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const period = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        hours = String(hours).padStart(2, "0");

        console.log(
            `${hours}:${minutes}:${seconds} ${period}`
        );
    }

    console.log("\n===== TASK 13: DIGITAL CLOCK =====");

    displayClock();

    // Uncomment this line if you want continuous clock output
    // setInterval(displayClock, 1000);
}


// ======================================================
// TASK 14 – Countdown Timer
// setInterval()
// ======================================================

{
    let count = 10;

    console.log("\n===== TASK 14: COUNTDOWN TIMER =====");

    // Uncomment to run the countdown
    /*
    const countdown = setInterval(() => {

        console.log(count);

        count--;

        if (count < 0) {
            clearInterval(countdown);
            console.log("Countdown Completed");
        }

    }, 1000);
    */
}


// ======================================================
// TASK 15 – Fake API Product Viewer (Fetch API)
// ======================================================

{
    console.log("\n===== TASK 15: FAKE API PRODUCT VIEWER =====");

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {

            products.forEach(product => {

                console.log("Product Name:", product.title);
                console.log("Price:", product.price);
                console.log("Image:", product.image);
                console.log("-------------------------");

            });

        })
        .catch(error => {
            console.log("Error:", error);
        });
}


// ======================================================
// TASK 16 – Employee Dashboard (Reduce)
// ======================================================

{
    const employees = [
        { name: "Arun", salary: 25000 },
        { name: "Kavin", salary: 40000 },
        { name: "Ravi", salary: 55000 },
        { name: "Surya", salary: 45000 }
    ];

    const totalSalary = employees.reduce(
        (total, employee) => total + employee.salary,
        0
    );

    const averageSalary =
        totalSalary / employees.length;

    const highestSalary = employees.reduce(
        (highest, employee) =>
            employee.salary > highest
                ? employee.salary
                : highest,
        0
    );

    console.log("\n===== TASK 16: EMPLOYEE DASHBOARD =====");
    console.log("Total Salary:", totalSalary);
    console.log("Average Salary:", averageSalary);
    console.log("Highest Salary:", highestSalary);
}


// ======================================================
// TASK 17 – Online Food Order
// ======================================================

{
    const menu = [
        { name: "Pizza", price: 250 },
        { name: "Burger", price: 150 },
        { name: "Shawarma", price: 120 },
        { name: "Fries", price: 100 }
    ];

    let order = [];

    // Add items
    order.push(menu[0]); // Pizza
    order.push(menu[1]); // Burger
    order.push(menu[3]); // Fries

    // Remove last item
    order.pop();

    const totalItems = order.length;

    const totalBill = order.reduce(
        (total, item) => total + item.price,
        0
    );

    console.log("\n===== TASK 17: ONLINE FOOD ORDER =====");
    console.log("Order:", order);
    console.log("Total Items:", totalItems);
    console.log("Total Bill:", totalBill);
}


// ======================================================
// TASK 18 – Bank Account
// ======================================================

{
    const account = {
        accountHolder: "Jeyasurya",
        balance: 10000,

        deposit(amount) {
            this.balance += amount;
            console.log("Deposited:", amount);
        },

        withdraw(amount) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log("Withdrawn:", amount);
            } else {
                console.log("Insufficient Balance");
            }
        },

        checkBalance() {
            console.log("Current Balance:", this.balance);
        }
    };

    console.log("\n===== TASK 18: BANK ACCOUNT =====");

    console.log("Account Holder:", account.accountHolder);

    account.checkBalance();

    account.deposit(5000);

    account.withdraw(2000);

    account.checkBalance();
}


// ======================================================
// TASK 19 – To-Do List
// ======================================================

{
    let tasks = [];

    // Add Task
    tasks.push("Complete JavaScript");
    tasks.push("Practice GitHub");
    tasks.push("Learn React");

    console.log("\n===== TASK 19: TO-DO LIST =====");

    // Update Task
    tasks[1] = "Practice Git";

    // Delete Task
    tasks.splice(2, 1);

    // Show All Tasks
    console.log("All Tasks:");

    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}


// ======================================================
// TASK 20 – Mini E-Commerce Product Management
// ======================================================

{
    let products = [];

    // Add Products
    products.push({
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 10
    });

    products.push({
        name: "Mobile",
        price: 20000,
        category: "Electronics",
        stock: 15
    });

    products.push({
        name: "Shirt",
        price: 1000,
        category: "Clothing",
        stock: 20
    });

    products.push({
        name: "Shoes",
        price: 2500,
        category: "Footwear",
        stock: 8
    });

    // Search Product
    const searchProduct = products.find(
        product => product.name === "Laptop"
    );

    // Filter by Category
    const electronics = products.filter(
        product => product.category === "Electronics"
    );

    // Total Stock
    const totalStock = products.reduce(
        (total, product) => total + product.stock,
        0
    );

    // Total Inventory Value
    const totalInventoryValue = products.reduce(
        (total, product) =>
            total + (product.price * product.stock),
        0
    );

    console.log("\n===== TASK 20: E-COMMERCE PRODUCT MANAGEMENT =====");

    console.log("All Products:");
    console.log(products);

    console.log("Search Result:");
    console.log(searchProduct);

    console.log("Electronics Products:");
    console.log(electronics);

    console.log("Total Stock:", totalStock);

    console.log(
        "Total Inventory Value:",
        totalInventoryValue
    );
}