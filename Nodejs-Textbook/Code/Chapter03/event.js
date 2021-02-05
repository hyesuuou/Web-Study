const EventEmitter = require('events');

const myEvent = new EventEmitter();
// addListener(이벤트명, 콜백) : on과 기능이 같다.
myEvent.addListener('event1', ()=>{
    console.log('이벤트 1');
});

// on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생시의 콜백을 연결
myEvent.on('event2', () =>{
    console.log('이벤트 2');
});

myEvent.on('event2', ()=>{
    console.log('이벤트 2 추가');
});

// once(이벤트명, 콜백) : 한 번만 실행되는 이벤트
myEvent.once('event3', ()=>{
    console.log('이벤트 3');
});

// emit(이벤트명) : 이벤트를 호출하는 메서드
myEvent.emit('event1');
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3'); // 호출 안됨

myEvent.on('event4', ()=>{
    console.log('이벤트 4');
});

// removeAllListeners(이벤트명) : 이벤트에 연결된 모든 리스너를 제거 ()
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안됨

const listener = () => {
    console.log('이벤트 5');
};
myEvent.on('event5', listener);

// removeListener(이벤트명, 리스너) : 이벤트에 연결된 리스너를 하나씩 제거한다.
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

// listenerCount(이벤트명) : 현재 리스너가 몇개 연결되어 있는지 확인한다.
console.log(myEvent.listenerCount('event2'));