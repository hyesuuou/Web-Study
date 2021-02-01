const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

// querystring.parse(쿼리) : url의 query부분을 자바스크립트 객체로 분해
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse() : ', query);

// querystring.stringify(객체) : 분해된 query 객체를 문자열로 다시 조립 
console.log('querystring.stringfy() : ', querystring.stringify(query));