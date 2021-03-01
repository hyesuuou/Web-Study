var http = require('http');
var cookie = require('cookie');
http.createServer((req, res)=>{
    console.log(req.headers.cookie);
    var cookies = {};
    if (req.headers.cookie !== undefined){
        var cookies = cookie.parse(req.headers.cookie);
    }
    console.log(cookies.yummy_cookie); 
    res.writeHead(200, {
        'Set-Cookie':[
            'yummy_cookie=choco', 
            'tasty_cookie=strawberry'
            `Permanent=cookies; Max-age=${60*60*24*30}`,
        ]
    });
    res.end('cookie!!');
}).listen(3000);
