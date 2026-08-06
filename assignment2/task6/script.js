// ================================
// Task 1 - Employee Date Management System
// ================================
{
// Employee Details
let employeeName = "jeyasurya";

// Date Constructor
let joiningDate = new Date(2025, 5, 10, 10, 30, 45);

// GET METHODS
let year = joiningDate.getFullYear();
let month = joiningDate.getMonth();
let date = joiningDate.getDate();
let day = joiningDate.getDay();

let hours = joiningDate.getHours();
let minutes = joiningDate.getMinutes();
let seconds = joiningDate.getSeconds();

// DISPLAY EMPLOYEE DETAILS

console.log("Employee Name : " + employeeName);

console.log("Joining Year : " + year);
console.log("Joining Month : " + month);
console.log("Joining Date : " + date);
console.log("Joining Day : " + day);

console.log("Joining Hours : " + hours);
console.log("Joining Minutes : " + minutes);
console.log("Joining Seconds : " + seconds);
}

// ================================
// Task 2 - Movie Show Booking System
// ================================
{
// Movie Details
let movieName = "master";
let ticketPrice = 200;
let tickets = 5;

// Date Constructor
let showDate = new Date(2026, 7, 15, 18, 30, 0);

// GET METHODS

let showYear = showDate.getFullYear();
let showMonth = showDate.getMonth();
let showDateValue = showDate.getDate();
let showDay = showDate.getDay();

let showHours = showDate.getHours();
let showMinutes = showDate.getMinutes();
let showSeconds = showDate.getSeconds();

// Calculate Total

let totalAmount = ticketPrice * tickets;

// Display Booking Details

console.log("Movie : " + movieName);
console.log("Ticket Price : " + ticketPrice);
console.log("Tickets : " + tickets);
console.log("Total Amount : " + totalAmount);

console.log("Show Year : " + showYear);
console.log("Show Month : " + showMonth);
console.log("Show Date : " + showDateValue);
console.log("Show Day : " + showDay);

console.log("Show Hours : " + showHours);
console.log("Show Minutes : " + showMinutes);
console.log("Show Seconds : " + showSeconds);
}

// ================================
// Task 3 - Flight Ticket Booking System
// ================================
{
// Passenger Details
let passengerName = "jeyasurya";
let flightName = "spic jet";
let flightTicketPrice = 7000;

// Date Constructor
let travelDate = new Date(2026, 8, 20, 14, 30, 0);

// GET METHODS

let travelYear = travelDate.getFullYear();
let travelMonth = travelDate.getMonth();
let travelDateValue = travelDate.getDate();
let travelDay = travelDate.getDay();

let travelHours = travelDate.getHours();
let travelMinutes = travelDate.getMinutes();
let travelSeconds = travelDate.getSeconds();

// Display Booking Details

console.log("Passenger Name : " + passengerName);
console.log("Flight Name : " + flightName);
console.log("Ticket Price : " + flightTicketPrice);

console.log("Travel Year : " + travelYear);
console.log("Travel Month : " + travelMonth);
console.log("Travel Date : " + travelDateValue);
console.log("Travel Day : " + travelDay);

console.log("Travel Hours : " + travelHours);
console.log("Travel Minutes : " + travelMinutes);
console.log("Travel Seconds : " + travelSeconds);
}
// ==========================================
// Task 4 - Hotel Booking System
// ==========================================
{
// Customer Details
let customerName = "Jeyasurya";
let roomType = "single Room";
let roomPrice = 5000;
let rooms = 2;

// Date Constructor
let bookingDate = new Date(2026, 9, 10, 11, 30, 0);

// GET METHODS
let bookingYear = bookingDate.getFullYear();
let bookingMonth = bookingDate.getMonth();
let bookingDayDate = bookingDate.getDate();
let bookingDay = bookingDate.getDay();

let bookingHours = bookingDate.getHours();
let bookingMinutes = bookingDate.getMinutes();
let bookingSeconds = bookingDate.getSeconds();

// Calculate Room Bill
let totalBill = roomPrice * rooms;

// Display Booking Details
console.log("Customer Name : " + customerName);
console.log("Room Type : " + roomType);
console.log("Room Price : " + roomPrice);
console.log("Number of Rooms : " + rooms);
console.log("Total Bill : " + totalBill);

console.log("Booking Year : " + bookingYear);
console.log("Booking Month : " + bookingMonth);
console.log("Booking Date : " + bookingDayDate);
console.log("Booking Day : " + bookingDay);

console.log("Booking Hours : " + bookingHours);
console.log("Booking Minutes : " + bookingMinutes);
console.log("Booking Seconds : " + bookingSeconds);
}


// ==========================================
// Task 5 - Food Delivery System
// ==========================================
{
// Customer Details
let customerName2 = "Jeyasurya";
let foodName = "Biryani";
let foodPrice = 250;
let quantity = 5;

// Date Constructor
let deliveryDate = new Date(2026, 7, 8, 19, 30, 0);

// GET METHODS
let deliveryYear = deliveryDate.getFullYear();
let deliveryMonth = deliveryDate.getMonth();
let deliveryDayDate = deliveryDate.getDate();
let deliveryDay = deliveryDate.getDay();

let deliveryHours = deliveryDate.getHours();
let deliveryMinutes = deliveryDate.getMinutes();
let deliverySeconds = deliveryDate.getSeconds();

// Calculate Food Bill
let foodBill = foodPrice * quantity;

// Display Order Details
console.log("Customer Name : " + customerName2);
console.log("Food Name : " + foodName);
console.log("Food Price : " + foodPrice);
console.log("Quantity : " + quantity);
console.log("Total Bill : " + foodBill);

console.log("Delivery Year : " + deliveryYear);
console.log("Delivery Month : " + deliveryMonth);
console.log("Delivery Date : " + deliveryDayDate);
console.log("Delivery Day : " + deliveryDay);

console.log("Delivery Hours : " + deliveryHours);
console.log("Delivery Minutes : " + deliveryMinutes);
console.log("Delivery Seconds : " + deliverySeconds);
}
// ==========================================
// Task 6 - Hospital Appointment System
// ==========================================
{
// Patient Details
let patientName = "Jeyasurya";
let doctorName = "Dr.hariharan";
let consultationFee = 500;

// Date Constructor
let appointmentDate = new Date(2026, 7, 12, 10, 30, 0);

// GET METHODS
let appointmentYear = appointmentDate.getFullYear();
let appointmentMonth = appointmentDate.getMonth();
let appointmentDayDate = appointmentDate.getDate();
let appointmentDay = appointmentDate.getDay();

let appointmentHours = appointmentDate.getHours();
let appointmentMinutes = appointmentDate.getMinutes();
let appointmentSeconds = appointmentDate.getSeconds();

// Display Appointment Details
console.log("Patient Name : " + patientName);
console.log("Doctor Name : " + doctorName);
console.log("Consultation Fee : " + consultationFee);

console.log("Appointment Year : " + appointmentYear);
console.log("Appointment Month : " + appointmentMonth);
console.log("Appointment Date : " + appointmentDayDate);
console.log("Appointment Day : " + appointmentDay);

console.log("Appointment Hours : " + appointmentHours);
console.log("Appointment Minutes : " + appointmentMinutes);
console.log("Appointment Seconds : " + appointmentSeconds);

console.log("Appointment Confirmed");
}


// ==========================================
// Task 7 - Bus Ticket Booking System
// ==========================================
{
// Passenger Details
let busPassengerName = "Jeyasurya";
let busName = "subam travels";
let busTicketPrice = 500;
let seats = 2;

// Date Constructor
let busTravelDate = new Date(2026, 8, 25, 21, 30, 0);

// GET METHODS
let busTravelYear = busTravelDate.getFullYear();
let busTravelMonth = busTravelDate.getMonth();
let busTravelDayDate = busTravelDate.getDate();
let busTravelDay = busTravelDate.getDay();

let busTravelHours = busTravelDate.getHours();
let busTravelMinutes = busTravelDate.getMinutes();
let busTravelSeconds = busTravelDate.getSeconds();

// Calculate Ticket Amount
let totalAmount = busTicketPrice * seats;

// Display Ticket Details
console.log("Passenger Name : " + busPassengerName);
console.log("Bus Name : " + busName);
console.log("Ticket Price : " + busTicketPrice);
console.log("Number of Seats : " + seats);
console.log("Total Amount : " + totalAmount);

console.log("busTravel Year : " + busTravelYear);
console.log("busTravel Month : " + busTravelMonth);
console.log("busTravel Date : " + busTravelDayDate);
console.log("busTravel Day : " + busTravelDay);

console.log("busTravel Hours : " + busTravelHours);
console.log("busTravel Minutes : " + busTravelMinutes);
console.log("busTravel Seconds : " + busTravelSeconds);

console.log("Ticket Booking Successful");
}


// ==========================================
// Task 8 - Exam Hall Ticket System
// ==========================================
{
// Student Details
let studentName = "Jeyasurya";
let registerNumber = 101;
let subject = "JavaScript";
let examFee = 300;

// Date Constructor
let examDate = new Date(2025, 10, 15, 10, 0, 0);

// GET METHODS
let examYear = examDate.getFullYear();
let examMonth = examDate.getMonth();
let examDayDate = examDate.getDate();
let examDay = examDate.getDay();

let examHours = examDate.getHours();
let examMinutes = examDate.getMinutes();
let examSeconds = examDate.getSeconds();

// Display Hall Ticket
console.log("Student Name : " + studentName);
console.log("Register Number : " + registerNumber);
console.log("Subject : " + subject);
console.log("Exam Fee : " + examFee);

console.log("Exam Year : " + examYear);
console.log("Exam Month : " + examMonth);
console.log("Exam Date : " + examDayDate);
console.log("Exam Day : " + examDay);

console.log("Exam Hours : " + examHours);
console.log("Exam Minutes : " + examMinutes);
console.log("Exam Seconds : " + examSeconds);

console.log("Hall Ticket Generated");
}
// ==========================================
// Task 9 - Event Registration System
// ==========================================
{
// Participant Details
let participantName = "Jeyasurya";
let eventName = "Engknow Fest";
let entryFee = 200;

// Date Constructor
let eventDate = new Date(2026, 11, 20, 9, 30, 0);

// GET METHODS
let eventYear = eventDate.getFullYear();
let eventMonth = eventDate.getMonth();
let eventDayDate = eventDate.getDate();
let eventDay = eventDate.getDay();

let eventHours = eventDate.getHours();
let eventMinutes = eventDate.getMinutes();
let eventSeconds = eventDate.getSeconds();

// Display Event Details
console.log("Participant Name : " + participantName);
console.log("Event Name : " + eventName);
console.log("Entry Fee : " + entryFee);

console.log("Event Year : " + eventYear);
console.log("Event Month : " + eventMonth);
console.log("Event Date : " + eventDayDate);
console.log("Event Day : " + eventDay);

console.log("Event Hours : " + eventHours);
console.log("Event Minutes : " + eventMinutes);
console.log("Event Seconds : " + eventSeconds);

console.log("Registration Successful");
}


// ==========================================
// Task 10 - Library Book Return System
// ==========================================
{
// Student Details
let studentName2 = "Jeyasurya";
let bookName = "JavaScript Basics";
let bookId = 102;

// Date Constructor
let returnDate = new Date(2025, 8, 30, 17, 30, 0);

// GET METHODS
let returnYear = returnDate.getFullYear();
let returnMonth = returnDate.getMonth();
let returnDayDate = returnDate.getDate();
let returnDay = returnDate.getDay();

let returnHours = returnDate.getHours();
let returnMinutes = returnDate.getMinutes();
let returnSeconds = returnDate.getSeconds();

// Display Book Details
console.log("Student Name : " + studentName2);
console.log("Book Name : " + bookName);
console.log("Book ID : " + bookId);

console.log("Return Year : " + returnYear);
console.log("Return Month : " + returnMonth);
console.log("Return Date : " + returnDayDate);
console.log("Return Day : " + returnDay);

console.log("Return Hours : " + returnHours);
console.log("Return Minutes : " + returnMinutes);
console.log("Return Seconds : " + returnSeconds);

console.log("Book Return Date Confirmed");
}