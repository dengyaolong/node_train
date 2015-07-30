var fib = function (n) {
  if (typeof n !== 'number') {
    throw new Error('n should be a number');
  }
  if (n > 20) {
    throw new Error('n should <= 20');
  }
  if (n < 0) {
    throw new Error('n should >=0');
  }
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
};

exports.fib = fib;
