### README.md

# ALX Backend JavaScript - TypeScript Tasks

This repository contains a series of tasks to practice TypeScript in the context of backend JavaScript development. Each task builds upon the previous one, introducing new TypeScript concepts and techniques.

## Table of Contents

1. [Task 0: Setting Up TypeScript](#task-0-setting-up-typescript)
2. [Task 1: Building a Teacher Interface](#task-1-building-a-teacher-interface)
3. [Task 2: Extending the Teacher Interface](#task-2-extending-the-teacher-interface)
4. [Task 3: Printing Teachers](#task-3-printing-teachers)
5. [Task 4: Writing a Class](#task-4-writing-a-class)
6. [Task 5: Advanced Types Part 1](#task-5-advanced-types-part-1)
7. [Task 6: Creating Functions Specific to Employees](#task-6-creating-functions-specific-to-employees)
8. [Task 7: String Literal Types](#task-7-string-literal-types)
9. [Task 8: Ambient Namespaces](#task-8-ambient-namespaces)
10. [Task 9: Namespace & Declaration Merging](#task-9-namespace--declaration-merging)
11. [Task 10: Update Main File](#task-10-update-main-file)
12. [Task 11: Brand Convention & Nominal Typing](#task-11-brand-convention--nominal-typing)

## Task 0: Setting Up TypeScript

### Description
Set up a TypeScript project with the necessary configuration files.

### Files
- `task_0/package.json`
- `task_0/tsconfig.json`
- `task_0/webpack.config.js`

## Task 1: Building a Teacher Interface

### Description
Create a `Teacher` interface with specific properties and allow additional properties.

### Files
- `task_1/js/main.ts`
- `task_1/package.json`
- `task_1/tsconfig.json`
- `task_1/webpack.config.js`

## Task 2: Extending the Teacher Interface

### Description
Extend the `Teacher` interface to create a `Directors` interface with an additional property.

### Files
- `task_1/js/main.ts`

## Task 3: Printing Teachers

### Description
Create a function `printTeacher` that formats a teacher's name and define its interface.

### Files
- `task_1/js/main.ts`

## Task 4: Writing a Class

### Description
Create a `StudentClass` with specific methods and describe it through interfaces.

### Files
- `task_1/js/main.ts`

## Task 5: Advanced Types Part 1

### Description
Create interfaces for `Director` and `Teacher` with specific methods and implement classes for each.

### Files
- `task_2/js/main.ts`
- `task_2/package.json`
- `task_2/tsconfig.json`
- `task_2/webpack.config.js`

## Task 6: Creating Functions Specific to Employees

### Description
Create functions `isDirector` and `executeWork` to handle different employee types.

### Files
- `task_2/js/main.ts`

## Task 7: String Literal Types

### Description
Create a string literal type `Subjects` and a function `teachClass` that uses it.

### Files
- `task_2/js/main.ts`

## Task 8: Ambient Namespaces

### Description
Create ambient type declarations for a third-party library and use them in the main file.

### Files
- `task_3/js/main.ts`
- `task_3/js/interface.ts`
- `task_3/js/crud.d.ts`
- `task_3/js/crud.js`
- `task_3/package.json`
- `task_3/tsconfig.json`
- `task_3/webpack.config.js`

## Task 9: Namespace & Declaration Merging

### Description
Create a namespace `Subjects` and use declaration merging to extend interfaces and implement classes.

### Files
- `task_4/js/subjects/Cpp.ts`
- `task_4/js/subjects/Java.ts`
- `task_4/js/subjects/React.ts`
- `task_4/js/subjects/Subject.ts`
- `task_4/js/subjects/Teacher.ts`
- `task_4/js/main.ts`
- `task_4/package.json`
- `task_4/tsconfig.json`
- `task_4/webpack.config.js`

## Task 10: Update Main File

### Description
Update the main file to create and use instances of `Cpp`, `Java`, and `React` subjects.

### Files
- `task_4/js/main.ts`

## Task 11: Brand Convention & Nominal Typing

### Description
Create interfaces `MajorCredits` and `MinorCredits` with a brand property and functions to sum credits.

### Files
- `task_5/js/main.ts`
- `task_5/package.json`
- `task_5/tsconfig.json`
- `task_5/webpack.config.js`

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/alx-backend-javascript.git
   cd alx-backend-javascript
   ```

2. Navigate to the task directory and install dependencies:
   ```sh
   cd 0x04-TypeScript/task_x
   npm install
   ```

### Running the Project
1. Build the project:
   ```sh
   npm run build
   ```

2. Start the development server:
   ```sh
   npm run start-dev
   ```

## License
This project is licensed under the MIT License.

---
