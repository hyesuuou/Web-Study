var fs = require('fs');

/*
// readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

// readFile (비동기적) ***
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    // 첫번째 파일을 읽는 작업이 끝나면 세 번째 callback 에서 에러가 있으면 err, 없으면 result에 파일의 내용을 받음
    console.log(result);
});
console.log('C');
