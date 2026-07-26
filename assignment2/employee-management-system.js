// Mini Project: Employee Management System

// Variables
let employeeId = 101;
let employeeName = "Arun";
let department = "Software";
let basicSalary = 40000;
let bonus = 5000;
let experience = 4;

// Array
let skills = ["Java", "JavaScript", "HTML", "CSS", "SQL"];

// Object
let employee = {
    employeeId: employeeId,
    employeeName: employeeName,
    department: department,
    basicSalary: basicSalary,
    experience: experience,
    skills: skills
};

// Function - Add Employee
function addEmployee(emp) {
    console.log("===== Employee Added Successfully =====");
    console.log(emp);
}

// Function - Display Employee
function displayEmployee(emp) {
    console.log("\n===== Employee Details =====");
    console.log("Employee ID:", emp.employeeId);
    console.log("Employee Name:", emp.employeeName);
    console.log("Department:", emp.department);
    console.log("Basic Salary:", emp.basicSalary);
    console.log("Experience:", emp.experience + " Years");
    console.log("Skills:", emp.skills.join(", "));
}

// Function - Calculate Salary
function calculateSalary(basicSalary, bonus) {
    let grossSalary = basicSalary + bonus;
    console.log("\n===== Salary Details =====");
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Gross Salary:", grossSalary);
}

// Function - Check Experience
function checkExperience(exp) {
    console.log("\n===== Experience Status =====");

    if (exp >= 5) {
        console.log("Senior Employee");
    } else {
        console.log("Junior Employee");
    }
}

// Function Calls
addEmployee(employee);
displayEmployee(employee);
calculateSalary(basicSalary, bonus);
checkExperience(experience);