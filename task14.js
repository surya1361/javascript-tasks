let type = prompt("Enter Type (Emergency/Senior Citizen/Normal):");

switch (type) {
    case "Emergency":
        console.log("Token 1");
        break;

    case "Senior Citizen":
        console.log("Priority");
        break;

    case "Normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid");
}