const { response } = require('express');
const express = require('express')
const fs = require('fs')
var path = require('path');
var qs = require('querystring');
var bodyParser = require('body-parser')
var sanitizeHtml = require('sanitize-html');
var compression = require('compression');
const template = require('./lib/template.js');

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


// route, routing -> path 마다 적당한 응답을 해줌.
app.get('/', (request, response) => {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `<h2>${title}</h2>${description}
    <img src="/images/hello.jpg" style="width:400px; display:block; margin-top:10px">
    ` ,
    `<a href="/create">create</a>`
  );
  response.send(html);
})

app.get('/page/:pageId', (request, response, next) => {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
    if (err){
      next(err);
    }
    else {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
       allowedTags:['h1']
      });
      var list = template.list(request.list);
      var html = template.HTML(sanitizedTitle, list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
          <a href="/update/${sanitizedTitle}">update</a>
          <form action="/delete" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`
      );
      response.send(html);
    }

    
  });
})

// create를 get 방식으로 전송할 때 라우터
app.get('/create', (request, response) => {
  var title = 'WEB - create';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
    <form action="/create" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p>
        <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
  `, '');
  response.send(html);
});

// post 방식으로 전송할 때 라우터 (create_process)
app.post('/create', (request, response)=> {
  var post = request.body;
  var title = post.title;
  var description = post.description;
  fs.writeFile(`data/${title}`, description, 'utf8', function(err){
    response.redirect(`/page/${title}`);
        
  })
  /*
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.redirect(`/page/${title}`);
            
      })
  });
  */
});

app.get('/update/:pageId', (request, response)=>{
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
      var title = request.params.pageId;
      var list = template.list(request.list);
      var html = template.HTML(title, list,
        `
        <form action="/update/:pageId" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `,
        `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
      );
      response.send(html);
    });
});

app.post('/update/:pageId', (request, response)=>{
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, `data/${title}`, function(error){
    fs.writeFile(`data/${title}`, description, 'utf8', function(err){
      response.redirect(`/page/${title}`)
    })
  });
});

app.post('/delete', (request, response)=>{
  var post = request.body;
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function(error){
    response.redirect('/');
  })
})

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

/*
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    // 기존에는 라우팅을 if 문을 이용했다.
    if(pathname === '/'){
      if(queryData.id === undefined){
        
      } else {
        
      }
    } else if(pathname === '/create'){
      
    } else if(pathname === '/create_process'){
      
    } else if(pathname === '/update'){
      
    } else if(pathname === '/update_process'){
      
    } else if(pathname === '/delete_process'){
     
});
app.listen(3000);
*/