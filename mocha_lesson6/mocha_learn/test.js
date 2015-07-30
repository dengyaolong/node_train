var fib = require('./fib');
var should = require('should');

describe('test fib.js', function() {
  it('should equal 0 when n=0', function(){
    fib.fib(0).should.equal(0);
  });
  it('should equal 1 when n=1', function(){
    fib.fib(1).should.equal(1);
  });
  it('should equal 55 when n=10', function(){
    fib.fib(10).should.equal(55);
  });
  it('should  throw n should <= 20', function(){
    (function() {fib.fib(25);})
    .should.throw('n should <= 20');
  });
  it('should throw n should be number', function(){
    (function() {fib.fib('what are you');})
    .should.throw('n should be a number');
  });
})
