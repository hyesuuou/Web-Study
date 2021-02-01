const crypto = require('crypto');

/**
 * createHash(알고리즘) : 사용할 해시 알고리즘 (ex. md5, sha1, sha256, sha512등)
 * update(문자열) : 변환할 문자열
 * digest(인코딩) : 인코딩할 알고리즘 (주로 base64, hex, latin1이 사용됨. base64가 가장 짧음.)
 */


// '비밀번호' 라는 문자열을 해시를 이용해 바꾼다.
console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));

// '다른 비밀번호' 라는 문자열을 해시를 이용해 바꾼다.
console.log('base64: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));