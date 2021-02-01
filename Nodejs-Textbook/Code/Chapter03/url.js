const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.naver.com');  // WHATWG의 url
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));

console.log('----------------------------------------');

const parsedUrl = url.parse('http://www.sookmyung.ac.kr'); // node의 URL
console.log('url.parse(): ', parsedUrl );   // url.parse(주소) : 주소를 분해한다.
console.log('url.format(): ', url.format(parsedUrl)); // url.format(객체) : 분해된 주소를 원래 상태로 조립함.

