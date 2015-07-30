var app = require('../app');
var should = require('should');
var supertest = require('supertest');
var request = supertest(app);


describe('test/test.js', function() {
  function testFib(n, exp, statusCode, done){
    request.get('/fib')
    .query({n: n})
    .expect(statusCode)
    .end(function(err, res) {
      res.text.should.equal(exp);
      if(err) console.log(res.body.stack);
      done(err);
    })
    

  }
  it('should return 55 when n is 10', function(done){
    testFib(10, '55', 200, done);
  });
  it('should return 1 when n is 1', function(done){
    testFib(1, '1', 200, done);
  });
  it('should return 0 when n is 0', function(done){
    testFib(0, '0', 200, done);
  });
  it('should throw n should be a number', function(done){
    testFib('a', 'n should be a number', 500, done);
  })
  it('should throw n should <= 20', function(done){
    testFib(25, 'n should <= 20', 500, done);
  })
  it('should throw n should >= 0', function(done){
    testFib(-1, 'n should >= 0', 500, done);
  })
})
