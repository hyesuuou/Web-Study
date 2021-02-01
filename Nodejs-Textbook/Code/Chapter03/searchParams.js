const { URL } = require('url');
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams : ', myURL.searchParams);
// getAll(키) - 키에 해당하는 모든 값을 가져옴
console.log('searchParams.getAll(키) : ', myURL.searchParams.getAll('category'));
// get(키) - 키에 해당하는 첫 번째 값을 가져옴
console.log('searchParams.get(키) : ', myURL.searchParams.get('limit'));
// has(키) - 키가 있으면 true, 없으면 false
console.log('searchParams.has(키) : ', myURL.searchParams.has('page'));

// keys() - 키를 모두 가져옴
console.log('searchParams.keys() : ', myURL.searchParams.keys());
// values() - 값을 모두 가져옴
console.log('searchParams.values() : ', myURL.searchParams.values());

// append(키, 값);
myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

// set(키, 값) - 같은 키의 값들을 모두 지우고 새로 추가함
myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

// delete(키) - 해당 키를 제거함
myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

// toString() - 조작한 searchParam 객체를 다시 문자열로 만든다.
console.log('searchParams.toString() : ', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString(); // 문자열을 search에 대입하면 주소 객체에 반영된다.