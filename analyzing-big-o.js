// Analyzing Big-O

function example1(array) {
  for (let i = 1; i <= 20; i++) {
    for (let j = 0; j < array.length; j++) {
    }
  }
}
// Answer: TIME COMPLEXITY: T(20n) => O(n)

function example2(array) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j <= array.length; j++) {
    } 
  }
}
// Answer: TIME COMPLEXITY: T(n^2 + n) => O(n^2)

function example3(n) {
  for (let i = 0; i < (n / 2); i++){
  }
}
// Answer: TIME COMPLEXITY: T(n/2) => O(n)

function example4(n) {
  if (n === 0) return;

  for (let i = 1; i <= 23; i++) {
  }
  example4(n - 1);
}
// Answer: TIME COMPLEXITY: T(23n) => O(n)

function example5(n) {
  if (n <= 1) return;

  example5(n - 1);
  example5(n - 1);
  example5(n - 1);
  example5(n - 1);
}
// Answer: TIME COMPLEXITY: O(4^n)

function example6(n) {
  if (n <= 1) return;
  for (let i = 1; i <= 4; i++) {
    example6(n - 1);
  }
}
// Answer: TIME COMPLEXITY: O(4^n)

function example7(str) {
  if (str.length <= 1) return;
  let midIdx = Math.floor(str.length / 2);
  let left = str.slice(0, midIdx);
  let right = str.slice(midIdx);

  example7(left);
  example7(right);
}
// Answer: TIME COMPLEXITY: O(nlog(n))
