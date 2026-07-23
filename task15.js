let status = prompt("Enter Attendance (Present/Leave/Absent):");

switch (status) {
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