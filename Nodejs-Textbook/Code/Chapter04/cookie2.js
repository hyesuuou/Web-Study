const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

// parseCookies -> 문자열을 객체로 바꿔준다.
const parseCookies = (cookie = '') =>
cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
    acc[k.trim()] = decodeURIComponent(v);
    return acc;
    }, {});


http.createServer(async (req, res) =>{
    const cookies = parseCookies(req.headers.cookie);

    // 주소가 login으로 시작하는 경우 -> url, querystring 모듈을 이용해서 각각 주소와 주소의 query를 분석함.
    if(req.url.startsWith('/login')){
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        //  쿠키 유효 시간을 현재시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, { // 리다이렉트 
            Location: '/',
            // 헤더에는 한글을 넣을 수 없으므로, encodeURLComponent를 이용해 인코딩
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    }
    
    // 주소가 /login이 아닌 경우

    // name이라는 쿠키가 있는 경우
    else if(cookies.name){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요`);
    }   

    // 쿠키가 없는 경우 -> cookie2.html(로그인창)으로 감.
    else{
        try{
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        }
        catch(err){
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
}) 
    .listen(8084, ()=>{
        console.log('8084번 포트에서 대기중입니다.');
    });
