function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  // Use loose equality to allow 0
  if (a == 0 || b == 0) { 
    return 0; // Explicitly handle 0 values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(0,2)); //Output: 0
console.log(foo(2,0)); //Output: 0