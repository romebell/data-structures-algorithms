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