const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread){  // 메인스레드(부모스레드)
    // new Worker 를 통해 현재 파일(__filename)을 워커 스레드에서 실행시킨다.
    const worker = new Worker(__filename); 
    worker.on('message', message => console.log('form worker', message)); // 메시지 받음
    worker.on('exit', () => console.log('worker.exit')); // 종료될때 실행 
    worker.postMessage('ping'); // 워커에 데이터를 보냄
}
else { // 워커스레드
    parentPort.on('message', (value) => {
        console.log('from parent', value); // 메시지 받음
        parentPort.postMessage('pong'); // 부모에 데이터 보맨 
        parentPort.close(); // 부모와의 연결 종료 
    });
}