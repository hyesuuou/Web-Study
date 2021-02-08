const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

// 미들웨어 사용 (요청과 응답의 중간에 위치하여 이를 조작하여 기능을 추가하거나 나쁜 요청을 걸러내는 역할을 한다.)
app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

app.use((req, res, next)=>{
    console.log('모든 요청에 다 실행됩니다.');
    next();
});

app.get('/',(req, res, next)=>{
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req, res)=>{
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

// 에러 처리 미들웨어
app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기 중');
})