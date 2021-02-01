// 여러 개의 워커 스레드에 데이터 넘기기 
const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if(isMainThread){
    const threads = new Set();
    // new Worker를 호출할 때, 두 번째 인수의 workerData 속성으로 원하는 데이터를 보낼 수 있다.
    threads.add(new Worker(__filename, {
        workerData : {start : 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start:2},
    }));
    for (let worker of threads){
        worker.on('message', message => console.log('form worker', message));
        worker.on('exit', ()=>{
            threads.delete(worker);
            if(threads.size === 0){ // 워커 두 개가 모두 종료되면 
                console.log('job done');
            }
        });
    }
}
else {
    const data = workerData;
    parentPort.postMessage(data.start + 100); // 부모로부터 숫자를 받아 100을 더해 돌려준다.
}