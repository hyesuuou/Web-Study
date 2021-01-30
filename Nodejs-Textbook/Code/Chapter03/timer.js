
// setTimeout(콜백함수, 밀리초) : 주어진 밀리초(1/1000 초) 이후에 콜백 함수를 실행한다.
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

// setInterval(콜백함수, 밀리초) : 주어진 밀리초 마다 콜백함수를 반복실행한다.
const interval = setInterval(()=>{
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.');      // 아래에서 2.5초만에 clearTimeout(timeout2)가 실행되기 때문이다.
}, 3000);


// clearTimeout(아이디) : setTimeout을 취소한다.
// clearInterval(아이디) : setInterval을 취소한다.
setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

// setImmediate(콜백함수) - 콜백함수를 즉시 실행한다.
const immediate = setImmediate(()=>{
    console.log('즉시 실행');
});

const immediate2 = setImmediate(()=>{
    console.log('실행되지 않습니다.');  // 아래 코드때문에 실행되지 않음
});


// clearImmediate(아이디) : setImmediate를 취소한다.
clearImmediate(immediate2);