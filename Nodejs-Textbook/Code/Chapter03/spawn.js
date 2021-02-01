const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);

// 실행결과
process.stdout.on('data', function(data){
    console.log(data.toString());
});

// 실행 에러
process.stderr.on('data', function(data){
    console.error(data.toString());
});