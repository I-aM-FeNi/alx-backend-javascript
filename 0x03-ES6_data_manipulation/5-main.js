import createInt8TypedArray from './5-typed_arrays.js';

// Test case: Valid input
console.log(createInt8TypedArray(10, 2, 89));

// Test case: Invalid input to verify error handling
try {
  console.log(createInt8TypedArray(10, 15, 100)); // This should throw an error
} catch (error) {
  console.error(error.message); // Output the error message
}

