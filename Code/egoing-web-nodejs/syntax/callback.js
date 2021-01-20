/*
function a(){
  console.log('A');
}
*/

// 이름이 없는 함수 = 익명함수
// 함수를 값으로 정의할 수 있다.
var a = function {
  console.log('A');
}

//a();

function slowfund(callback){
  callback();
}

slowfunc(a);
