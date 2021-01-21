/* var M = {
  v : 'v',
  f : function(){
    console.log(this.v);
  }
}
*/

var part = require('./mpart.js');
console.log(part);  // 객체를 콘솔에 출력한다.
part.f(); //M.f();
