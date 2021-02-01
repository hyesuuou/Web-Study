const util = require('util');
const crypto = require('crypto');

// deprecate를 사용하면 앞으로 사용하지 않을 것임을 알려주는 경고 메시지가 출력된다.
const dontUseMe = util.deprecate((x,y) => {
    console.log(x+y);
}, 'dontUseMe 함수는 deprected 되었으니, 더 이상 사용하지 마세요.');

dontUseMe(1,2);

// promisify : 콜백 패턴을 프로미스 패턴으로 바꿀 수 있다.(장점: async, await 패턴까지 사용 가능)
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf)=>{
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    })