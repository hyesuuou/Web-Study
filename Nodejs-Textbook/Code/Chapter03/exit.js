let i = 1;

// setInterval로 1초마다 반복됨 
setInterval(()=> {
    if (i == 5){
        console.log('종료');
        process.exit(); // 실행중인 노드 프로세스를 종료한다.
    }
    console.log(i);
    i += 1;

}, 1000);