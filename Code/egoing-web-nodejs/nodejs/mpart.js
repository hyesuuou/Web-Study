var M = {
  v : 'v',
  f : function(){
    console.log(this.v);
  }
}

// M이 가리키는 객체를 바깥에서 사용할 수 있도록 export 하겠다.
module.exports = M;
