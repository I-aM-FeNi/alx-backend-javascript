// Modify taskFirst to use const
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Using const because task is not reassigned
  return task;
}

// Helper function getLast (no changes required here)
export function getLast() {
  return ' is okay';
}

// Modify taskNext to use let
export function taskNext() {
  let combination = 'But sometimes let'; // Using let because combination is reassigned
  combination += getLast();
  return combination;
}

