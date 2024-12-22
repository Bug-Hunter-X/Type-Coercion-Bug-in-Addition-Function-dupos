# Type Coercion Bug in JavaScript Addition Function

This repository demonstrates a subtle bug in a JavaScript function that performs addition. The bug arises from type coercion and how JavaScript handles null and 0 values. 

## Bug Description

The `foo` function is designed to add two numbers. However, it incorrectly returns `null` if either input is `null` or 0. This is because the `===` operator performs strict equality checks, without automatic type coercion.  This behavior is unexpected in a simple addition function.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript runtime (e.g., Node.js).
4. Observe the unexpected null return when either input is 0.

## Solution

The solution involves explicitly checking for null values and using loose equality (`==`) to address the issue of 0 being treated as falsy.  This approach ensures that the addition is performed as intended while still handling null values correctly.
