function foo(a, b) {
  if (a === null || b === null) {
    return null; // This will cause unexpected behavior when calling bar
  }
  return a + b;
}

function bar(x, y) {
  const result = foo(x, y);
  if (result === null) {
    return 0; // Handle null case
  }
  return result * 2;
}

console.log(bar(1, 2)); // Output: 6
console.log(bar(null, 2)); // Output: 0
console.log(bar(1, null)); // Output: 0
console.log(bar(null, null)); // Output: 0