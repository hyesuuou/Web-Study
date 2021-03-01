const express = require('express')
const fs = require('fs')
var bodyParser = require('body-parser')
var compression = require('compression');
var topicRouter = require('./routes/topic');
var indexRouter = require('./routes');
var helmet = require('helmet')
app.use(helmet())

const app = express()
const port = 3000

app.use(express.static('public')); // public 디렉토리 안의 정적 파일 사용하겠다.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// 미들웨어 만들기
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, fileList){
    request.list = fileList;
    next();
  });
});

app.use('/',indexRouter);
app.use('/topic', topicRouter);

// 404 error
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
