// 1. 조건문은 값이 되지 않음
// var i = if (true ){console.log(1);} 오류!!!!!!

// 2. 반복문은 값이 되지 않음.
// var w = while(true){console.log(1);} 오류!!!!!!

// 3. 함수는 값이 된다.
var f = function(){
  console.log(1+1);
  console.log(1+2);
}
//console.log(f);
//f();

var a = [f];
a[0]();

var o = {
  func : f
}
o.func();
