function foo(a, b) {
  if (a === null || b === null) {
    throw new Error("Null values not allowed"); // Throw an error for clarity
  }
  return a + b;
}

function bar(x, y) {
  try {
    const result = foo(x, y);
    return result * 2;
  } catch (error) {
    console.error("Error in foo function:", error.message);  // Handle the error
    return 0; // Or any other appropriate default handling
  }
}

console.log(bar(1, 2)); // Output: 6
console.log(bar(null, 2)); // Throws error
console.log(bar(1, null)); // Throws error
console.log(bar(null, null)); // Throws error