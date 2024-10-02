// taskFirst function uses 'const' to declare a constant variable 'task'
export function taskFirst() {
  // 'task' is a constant variable and cannot be reassigned
  const task = 'I prefer const when I can.';
  return task; // returns the string assigned to 'task'
}

// getLast function returns a simple string
export function getLast() {
  return ' is okay'; // returns ' is okay'
}

// taskNext function uses 'let' to declare a variable 'combination'
export function taskNext() {
  // 'combination' is declared with 'let' because its value will change
  let combination = 'But sometimes let';
  // 'combination' is modified by appending the string returned from getLast
  combination += getLast(); // 'combination' becomes 'But sometimes let is okay'

  return combination; // returns the final value of 'combination'
}
