function powerOfTwo(n) {
  while (n > 1) {
    if (n % 2 === 0) {
      return true;
    }
    n /= 2;
  }
  return false;
}

console.log(powerOfTwo(256));