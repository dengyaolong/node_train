var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var fib_me = {};
function fib_re(num) {
  return num < 2 ? 1 : fib_re(num - 1) + fib_re(num - 2);
}
function fib_re_me(num) {
  if(fib_me.num) return fib_me.num;
  return fib_me.num = (num < 2 ? 1 : fib_re(num - 1) + fib_re(num - 2));
}

function fib_dp(num) {
  var fib_arr = [];
  fib_arr[0] = 1;
  fib_arr[1] = 1;
  for(var i = 2; i <= num; ++i) {
    fib_arr[i] = fib_arr[i-1] + fib_arr[i-2];
  }
  return fib_arr[num];
}
var num = 20;

suite
.add('递归的Fib', function(){
  // console.log(fib_re(num));
  fib_re(num);
})
.add('记忆搜索的Fib', function(){
  // console.log(fib_re_me(num));
  fib_re_me(num);
})
.add('dp的Fib', function(){
  // console.log(fib_dp(num));
  fib_dp(num);
})
.on('cycle',function(event){
  console.log(String(event.target));
})
.on('complete',function(){
  console.log('Fastest is' + this.filter('fastest').pluck('name')) ;
})
.run({'async': true});
