//Write an interface named Student that accepts the following elements: 
//firstName(string), lastName(string), age(number), and location(string)
//Create two students, and create an array named studentsList containing the two variables
//Using Vanilla Javascript, render a table and for each elements in the array,
//append a new row to the table
//Each row should contain the first name of the student and the location
// Student creation
var firstStudent = {
    firstName: "Edison",
    lastName: "Emeremnu",
    age: 24,
    location: "Nigeria"
};
var secondStudent = {
    firstName: "Mamello",
    lastName: "Motaung",
    age: 28,
    location: "SA"
};
// An array of student list
var studentsList = [firstStudent, secondStudent];
// Get the table element
var table = document.getElementById('studentTable');
studentsList.forEach(function (student) {
    // Insert a new row
    var row = table.insertRow();
    // Insert the first name in the first cell (index 0)
    var firstNameCell = row.insertCell(0);
    // Insert the location in the second cell (index 1)
    var locationCell = row.insertCell(1);
    // Set the text content for the cells
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
// Log the students to the console
console.log("Students List:", studentsList);
