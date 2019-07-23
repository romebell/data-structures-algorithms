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