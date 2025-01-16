# Unexpected Null Handling in JavaScript Functions

This repository demonstrates an uncommon bug related to null handling in JavaScript functions. The `foo` function returns `null` when either input is `null`, leading to unexpected behavior in the `bar` function. 

## Bug Description
The primary issue lies in the `foo` function's null handling.  When either `a` or `b` is `null`, it returns `null`.  The `bar` function attempts to handle this with a simple check, but the unexpected behaviour occurs when both inputs to `foo` are `null`.

## Solution
The solution involves improving the null handling in `foo` to provide better error reporting or a more robust default behavior when null values are provided.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to examine the buggy code and the solution.
3. Run `bug.js` using a JavaScript runtime (e.g., Node.js) to observe the unexpected behavior.
4. Run `bugSolution.js` to see the corrected behavior.