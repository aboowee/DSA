function factorial(n) {
  result = 1;
  if (n < 1) {
    return result;
  }
  while (n > 0) {
    result *= n
    n--;
  }
  return result;
}

console.log(factorial(1));