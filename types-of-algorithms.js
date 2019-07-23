// Constant - O(1)

function constant_1(n) {
  return n * 2 + 1;
}

function constant_2(n) {
  for (let i = 1; i <= 100; i++){
  }
}

// Logrithmic - O(log(n))
function logarithmic(n) {
  if (n <= 1) return;
  logarithmic(n / 2);
}

// Linear - O(n)
function linear_1(n) {
  for (let i = 1; i <= n; i++){
  }
}

function linear_2(n) {
  if (n === 1) return;
  linear_2(n - 1);
}

// Loglinear - O(n * log(n))
function loglinear(n) {
  for (let i = 1; i <= n; i++){
  }
  loglinear(n / 2);
  loglinear(n / 2);
}

// Polynomial - O(n^2)
function quadratic(n){
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++){
    }
  }
}

function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
      }
    }
  }
}

// Exponential - O(2^n)
function exponential_2n(n) {
  if (n === 1) return;
  exponential_2n(n - 1);
  exponential_2n(n - 1);
}

function exponential_3n(n) {
  if (n === 0) return;
  exponential_3n(n - 1);
  exponential_3n(n - 1);
  exponential_3n(n - 1);
}

// Factorial - O(n!)
function factorial(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++){
    factorial(n - 1);
  }
}
