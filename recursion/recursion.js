function countdown(n) {
  // base case
  if (n === 0) {
    console.log('blast off!');
    return;
  }
  
  // recursive step
  console.log(n);
  countdown(n - 1);
}

countdown(10);

// Factorial
function factorial(n) {
  if (n === 1) return 1;
  
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Fibonacci Squaure
function fib(n) {
  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

// The following function is of the Lucas Sequence. This sequence is given a number
// returns the next number in the sequence by adding up the sum of the previous two numbers.
// In the case of the 0, the answer is 2, and in the case of 1, the answer is 1.

// With the function, I made the base case for if n get 0, then return 2. the second base case
// was if n is 1, return 1. From there, I wrote a recursive function.
function lucasNumber(n) {
  if (n === 0) return 2;
  if (n === 1) return 1;
  return lucasNumber(n - 1) + lucasNumber(n - 2);
}

// This function reverses a string

function reverseString(str) {
  if (typeof str === 'string') {
      str = str.split('');
  }
  if (str.length === 0) return '';
  return str.pop() + reverseString(str);   
}

// This function calculates the base raised to to the exponent power

function pow(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 0) {
      return (1/base) * pow(base, (exponent + 1));
  }
  return base * pow(base, (exponent - 1));
}