export default function hasValuesFromArray(set, array) {
  // Step 3: Use the every method
  return array.every((value) => set.has(value));
}

