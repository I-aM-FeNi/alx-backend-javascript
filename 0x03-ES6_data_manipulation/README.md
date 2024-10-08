# ES6 Data Manipulation

This project contains tasks related to ES6 data manipulation.

## Requirements

- NodeJS 12.11.x
- Jest
- Babel
- ESLint

## Setup

1. Install NodeJS 12.11.x
2. Run `npm install` to install dependencies

## Tasks

### 0. Basic list of objects

Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

### 1. More mapping

Create a function named `getListStudentIds` that returns an array of ids from a list of objects.

### 2. Filter

Create a function named `getStudentsByLocation` that returns an array of objects who are located in a specific city.

### 3. Reduce

Create a function named `getStudentIdsSum` that returns the sum of all the student ids.

### 4. Combine

Create a function named `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

### 5. Typed Arrays

Create a function named `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

### 6. Set data structure

Create a function named `setFromArray` that returns a Set from an array.

### 7. More set data structure

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

### 8. Clean set

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string.

### 9. Map data structure

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

- Apples, 10
- Tomatoes, 10
- Pasta, 1
- Rice, 1
- Banana, 5

### 10. More map data structure

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

### 11. Weak link data structure

Export a const instance of `WeakMap` and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument like so:

```javascript
{
  protocol: 'http',
  name: 'getUsers',
}


Track within the weakMap the number of times queryAPI is called for each endpoint.

When the number of queries is >= 5 throw an error with the message Endpoint load is high.

Running Tests
To run the tests, use the following command:

npm test


Scripts
npm run lint: Run ESLint
npm run check-lint: Check linting for files
npm run dev: Run the project using Babel
npm run test: Run tests using Jest
npm run full-test: Run both ESLint and Jest

Configuration Files
package.json
babel.config.js
.eslintrc.js


Author
This project was created by Malcolm C. Iheremelam.


