setImmediate(()=>{
    console.log('immdeiate');
});

// nextTick 의 콜백함수를 다른 콜백보다 우선으로 처리한다.
process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(()=> {
    console.log('timeout');
}, 0);

// promise 도 다른 콜백보다 우선으로 처리한다.
Promise.resolve().then(()=> console.log('promise'));