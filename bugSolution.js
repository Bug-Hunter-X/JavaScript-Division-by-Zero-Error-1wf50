function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b; 
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return Infinity; // or return 0, or handle it in a way that suits your application
  }
  return a / b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(7, 2)); // Output: 14
console.log(divide(9, 3)); // Output: 3
console.log(divide(5, 0)); // Output: Infinity