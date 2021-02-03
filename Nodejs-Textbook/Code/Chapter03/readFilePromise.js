// 콜백기반이 아닌 프로미스 기반으로 사용한다.
const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then ((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err)=>{
        console.error(err);
    });