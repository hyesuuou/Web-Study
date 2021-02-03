// Buffer - 버퍼를 직접 다룰 수 있는 클래스

// from(문자열) : 문자열을 버퍼로 바꾼다.
const buffer = Buffer.from('저를 버퍼로 바꿔보세요.');
console.log('from():', buffer);
// length 속성 ; 버퍼의 크기를 알려준다.
console.log('length:', buffer.length);

// toString(): 버퍼를 다시 문자열로 바꾼다.
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
// concat(배열) : 배열 안에 든 버퍼들을 하나로 합친다.
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

// alloc(바이트) : 빈 버퍼가 생성되며, 바이트를 넣으면 그만큼의 크기를 가진 버퍼가 생성됨
const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);