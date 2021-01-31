const { isAbsolute } = require('path');
const path = require('path');

const string = __filename; // __filename : 파일 이름까지의 경로

console.log('path.sep : ', path.sep); // 경로의 구분자(/ or \)
console.log('path.delimiter : ', path.delimiter); // 환경변수의 구분자(: or ;)
console.log('---------------------------------------------');

console.log('path.dirname(경로) : ', path.dirname(string)); // 파일이 위치한 폴더 경로
console.log('path.extname(경로) : ', path.extname(string)); // 파일의 확장자
console.log('path.basename(경로) : ', path.basename(string)); // 파일의 이름(확장자 포함)
console.log('path.basename(경로,확장자) : ', path.basename(string, path.extname(string))); // 파일의 이름(확장자 제외)
console.log('---------------------------------------------');

console.log('path.parse(경로) : ', path.parse(string)); // 파일 경로를 root, dir, base, ext, name으로 분리
console.log('path.format(객체) : ', path.format({
    dir : '/Users/kimhyesu/dev/Web-Study/Nodejs-Textbook/Code/Chapter03',
    name : 'path',
    ext : '.js',
})); // 객체를 파일 경로로 합친다.
console.log('path.normalize(경로) : ', path.normalize('/Users///kimhyesu/dev/Web-Study///\//Nodejs-Textbook///Code/Chapter03/path.js')); // /나 \를 실수로 많이쓰거나 혼용했을 때 정상적으로 변환
console.log('---------------------------------------------');

// 절대경로 - true, 상대경로 - false
console.log('isAbsolute(절대경로) : ', path.isAbsolute('/Users/kimhyesu'));
console.log('isAbsolute(상대경로) : ', isAbsolute('./home'));

console.log('---------------------------------------------');
// 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려준다.
console.log('path.relative(기준경로, 비교경로) : ', path.relative('/Users/kimhyesu/dev', '/Users'));
// 여러 인수를 넣으면 하나의 경로로 합친다. .. 와 . 도 알아서 처리함.
console.log('path.join(경로, ...) : ', path.join(__dirname, '..', '..', '/kimhyesu'));
// join 과 비슷하지만 /를 만나면 절대경로로 인식해서 앞의 경로를 무시한다.
console.log('path.resolve(경로, ...) : ', path.resolve(__dirname, '..', '/kimhyesu', '.' )); // /kimhyesu에서 절대경로로 인식해버림.