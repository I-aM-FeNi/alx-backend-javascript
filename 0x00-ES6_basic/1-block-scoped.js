export default function taskBlock(trueOrFalse) {
  const task = false; // Use 'const' to prevent reassignment
  const task2 = true; // Use 'const' to prevent reassignment

  if (trueOrFalse) {
    const task = true; // This 'task' is block-scoped to this 'if' block
    const task2 = false; // This 'task2' is also block-scoped to this 'if' block
  }

  return [task, task2]; // Return the original 'task' and 'task2'
}
