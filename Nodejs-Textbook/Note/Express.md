# Express 익스프레스

서버를 제작할 때 불편함을 해소하고 편의기능을 추가한 웹 서버 프레임워크 중, 대표적인 것으로 익스프레스(express)가 있다. 익스프레스 내부에는 **http 모듈이 내장**되어있어서 express 만으로도 서버의 역할을 할 수 있다. express는 기존의 http 모듈에서 요청객체(req)와 응답객체(res)에 편리한 메서드를 추가적으로 만들어놓아서 더 쉽고 편리하게 서버를 관리할 수 있도록 했다.

## nodemon

```
$ npm i express
$ npm i -D nodemon
```

서버 코드를 변경할 때마다 서버를 **새로 시작하지 않고도 자동으로 재시작** 할 수 있도록 한다. 배포 이후에는 서버 코드가 잘 변경되지 않으므로, 개발 중에만 사용한다.

### "start" : "nodemon app"

`start`속성에 `nodemon app` 을 넣어주어 app.js를 nodemon으로 실행하도록 한다.

```json
// package.json
{
	
	"scripts": {
	    "start": "nodemon app"
	}
	
}
```

## express 모듈 사용하기

### const app = express();

먼저 express 모듈을 실행에 변수 app에 할당해준다.

```jsx
const express = require('express');

const app = express();
```

### app.set('port', 포트)

`app.set('port', 포트)`로 서버가 실행될 포트를 설정해준다. 

```jsx
// process.env 객체에 PORT 속성이 있으면 사용하고, 없으면 3000을 사용
app.set('port', process.env.PORT || 3000);
```

### app.set(키, 값)

`app.set(키, 값)`을 이용해 데이터를 저장한다. 저장한 값을 읽어오려면 `app.get(키)`를 이용한다.

### app.get(주소, 라우터)

주소에 대해서 GET 요청이 올 때 어떤 동작을 할지 작성한다. `req`는 요청에 대한 정보를,`res`는 응답에 대한 정보를 담고 있고, `res.send()`는 res.write나 res.end와 비슷한 역할을 한다.

```jsx
app.get('/', (req, res)=>{
    res.send('Hello, express!');
});
```

app.get 외에도 get부분에 다른 METHOD를 넣어 `app.post`, `app.put`, `app.patch`, `app.delete`, `app.option` 으로 사용할 수 있다.

<br>

## express의 req객체

req 객체는 http 모듈의 req 객체를 확장한 것으로, 요청에 대한 정보를 담고있다.

- `[req.app](http://req.app)` : req 객체를 통해 app 객체에 접근한다. ex) `req.app.get('port')`
- `req.body` : body-parser 미들웨어가 만드는 요청의 본문(body)를 해석한 객체이다.
- `req.cookies` : cookie-parser 미들웨어가 만드는 요청의 쿠기를 해석한 객체이다.
- `req.ip` : 요청의 ip주소가 담겨있다.
- `req.param` : 라우트 매개변수(:~~)에 대한 정보가 담겨있다.
- `req.query` : query string에 대한 정보가 담겨 있다.
- `req.signedCookies` : 서명된 쿠키들이 담겨있다.
- `req.get(헤더이름)` : 헤더의 값을 가져오고 싶을 때 사용한다.

## express의 res객체

res 객체는 http 모듈의 res 객체를 확장한 것으로, 응답에 대한 정보를 담고있다.

- `[res.app](http://res.app)` : res객체를 통해 app 객체에 접근한다.
- `res.cookie(키, 값, 옵션)` : 쿠키를 설정하는 메서드
- `res.clearCookie(키, 값, 옵션)` : 쿠키를 제거하는 메서드
- `res.end()` : 데이터 없이 응답을 보내는 메서드
- `res.json(JSON)` : JSON 형식의 응답을 보낸다.
- `res.render(뷰, 데이터)` : 템플릿 엔진을 렌더링해서 응답할 때 사용한다.
- `res.send(데이터)` : 데이터(문자열, html, 버퍼, 객체, 배열 등)와 함께 응답을 보낸다.
- `res.sendFile(경로)` : 경로에 위치한 파일을 응답한다.
- `res.set(헤더, 값)` : 응답의 헤더를 설정한다.
- `res.status(코드)` : 응답 시 HTTP 상태코드를 지정한다.


### res.sendFile

HTML 파일로 응답하고 싶으면 res.send 말고 `res.sendFile`을 사용한다. 이때, sendFile의 주소 부분에는 **path 모듈을 사용한 주소**를 넣어야 한다.

```jsx
const path = require('path');

..
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
});
```
