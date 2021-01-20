// 서로 연관된 값을 하나의 객체 안에 정리정돈 해서 넣어놓을 수 있다.
var o = {
  v1: 'v1',
  v2: 'v2',
  f1: function (){
    console.log(v1);
  }
  f2: function (){
    console.log(v2);
  }
}


o.f1();
o.f2();
