const os = require('os');

console.log('운영체제 정보 ----------------------------');
console.log('os.arch() : ', os.arch()); // process.arch와 동일(Returns the operating system CPU architecture for which the Node.js binary was compiled.)
console.log('os.platform() : ', os.platform()); // process.platform 과 동일
console.log('os.type() : ', os.type()); // 운영체제의 종류를 보여준다.
console.log('os.uptime() : ', os.uptime()); // 운영체체 부팅 이후 흐른 시간
console.log('os.hostname() : ' , os.hostname()); // 컴퓨터 이름
console.log('os.release() : ', os.release()); // 운영체제의 버전

console.log('경로 ----------------------------');
console.log('os.homedir() : ', os.homedir()); // 홈 디렉터리 경로
console.log('os.tmpdir() : ', os.tmpdir()); // 임시 파일 저장 경로

console.log('CPU 정보 ----------------------------');
console.log('os.cpus() : ', os.cpus()); // 컴퓨터의 코어 정보
console.log('os.cpus().length : ', os.cpus().length); // 코어의 수가 숫자로 나온다.

console.log('메모리 정보 ----------------------------');
console.log('os.freemem() : ', os.freemem()); // 사용 가능한 메모리 (RAM) 을 보여준다.
console.log('os.totalmem() : ', os.totalmem()); // 전체 메모리 용량