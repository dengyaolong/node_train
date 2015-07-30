var express = require('express');

var fib = function (n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error('n should be a number');
  }
  if (n > 20) {
    throw new Error('n should <= 20');
  }
  if (n < 0) {
    throw new Error('n should >= 0');
  }
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
};


var app = express();

app.get('/fib', function (req, res) {
  var n = Number(req.query.n);
  try {
    res.send(String(fib(n)));
  } catch (e) {
    res.status(500).send(e.message);
  }
});
module.exports = app;

app.listen(3009, function(){
  console.log('app is listening at port 3009');
});

