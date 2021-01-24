var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var template = require('./lib/template.js');

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var now_date ;


  if (pathname === '/'){
    if (queryData.id === undefined){  //id값 없으면 (home!) -> 사용법daily, weekly, monthly 모아보기 & 날짜 목록 출력할것
      fs.readdir('./data', function(error, fileList){
        var list = template.list(fileList);
        var html = template.homehtml(list);
        response.writeHead(200);
        response.end(html);
      })


    }
    else {  //id값 있으면 (id값을 daily, weekly, monthly로 할지... 아니면 날짜로 할지 매우 고민중)
      fs.readdir('./data', function(error, fileList){
        var filteredId = path.parse(queryData.id).base;
        var date = queryData.id;
        now_date = queryData.id;

        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
          var html = template.dailyhtml(date, description);
          response.writeHead(200);
          response.end(html);
        })
      });
    }

  }

  else if (pathname === '/create'){   // 날짜 생성 양식 출력 !

  }

  else if (pathname === '/create_process'){   // 날짜 생성 버튼 누른 후!

  }

  else if (pathname === '/dailytodo_create_process'){ // 해당 날짜 할일 추가 버튼 누른 후
    var body = '';

    request.on('data', function(data){
      body = body + data;
    });
    request.on('end', function(){
      var post = qs.parse(body);
      var title = post.id;
      console.log (post);
      fs.appendFile(`data/${title}`, `<li>${post.todo}</li>`,'utf8', function(err){
        if (err) throw err;
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
        console.log('data append');



      });
  });

  }



  else if (pathname === '/delete_process'){   // 날짜 삭제

  }

  else {  // Not found 페이지
    response.writeHead(404);
    response.end('Not found');
  }

});

app.listen(3000);
