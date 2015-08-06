var assert = require('assert');
var app = require('../app');
var should = require('should');
var supertest = require('supertest');
var request = supertest(app);

describe('test/test.js', function() {
  it('should response a list', function(done) {
    request.get('/')
    .expect(200)
    .end(function(err, res) {
      if (err) {
        return done(err);
      }
      assert(res.body instanceof Array);
      res.body.forEach(function(item) {
        assert(item.title);
        assert(item.href);
        assert(item.author);
      });
      done(err);
    })
  })
})
