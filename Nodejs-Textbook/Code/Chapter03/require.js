// require : 모듈을 불러온다.
// require 이 반드시 최상단에 위치할 필요도 없고, model.exports도 최하단에 위치할 필요가 없다.

console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');


// require.cache : 한번 불러온 파일은 cache에 저장되어 다시부르면 여기 있는게 재사용된다.
console.log('require.cache입니다.');
console.log(require.cache);

// require.main : 노드 실행시 첫 모듈을 가리킨다. (이 파일을 node require로 실행하면 require.js가 require.main이 된다.)
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);
