
// 최상위 스코프의 this는 module.exports 또는 exports 를 가리킨다.
console.log(this);  // {}
console.log(this === module.exports);   // true
console.log(this === exports);      // true

function whatIsThis(){
    // 함수 선언문 내부의 this는 global 객체를 가리킨다.
    console.log('function', this === exports, this === global); // function false true
}

whatIsThis();