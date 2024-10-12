//Write an interface named Student that accepts the following elements: 
//firstName(string), lastName(string), age(number), and location(string)
//Create two students, and create an array named studentsList containing the two variables
//Using Vanilla Javascript, render a table and for each elements in the array,
//append a new row to the table
//Each row should contain the first name of the student and the location


// The Teacher interface object
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; 
    location: string;
    [key: string]: any;
}

// Craete  teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};


console.log(teacher3);

// The Director interface object
interface Directors extends Teacher {
    numberOfReports: number;
}


// Create Director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for the function named printTeacherFunction
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
const result = printTeacher("John", "Doe");


