# Router

[express 공식문서 - router](http://expressjs.com/en/guide/routing.html)

## router

route는 어떤 주소의 요청이 들어온지 파악하여, 그 **path 마다 적당한 응답을 해 주는 역할**을 합니다. 아래와 같이 생긴 코드를 router라고 합니다.

```jsx
app.get('/', (req, res) => {
  res.send('Hello World!')
}) 
```

위 코드는 localhost:port번호/ 일때의 응답을 지정해 준 라우터 입니다.

```jsx
app.get('/page', (req, res) => {
  res.send('/page')
})
```

위 코드는 localhost:port번호/page 일 때의 응답을 지정해 준 라우터 입니다.

![image1](https://user-images.githubusercontent.com/68391767/108807589-26dfdd80-75e8-11eb-9c5a-88a289ff6f69.png)
![image2](https://user-images.githubusercontent.com/68391767/108807635-3f4ff800-75e8-11eb-8342-ed51cd45a49a.png)

<br>

## Route parameters

라우터 주소에는 정규 표현식, 특수패턴을 사용할 수 있는데, 그 중 자주 쓰이는 패턴으로 **라우트 매개변수(route parameters)**가 있습니다. 

- route parameters는 `req.params` 객체 안에 들어있습니다.
- `/users/:userId` 인 경우에는 `req.params.userid` 로, `/page/:pageId` 인 경우에는 `req.params.pageId`로 조회할 수 있습니다.

```jsx
app.get('/page/:pageId', (request, response) => {
  response.send(request.params)
})
```

![image3](https://user-images.githubusercontent.com/68391767/108807692-5ee72080-75e8-11eb-8ce4-c656e25955cc.png)

위에서는 page 다음에 :pageId라는 라우터 매개변수를 사용했습니다. 주소창에서 localhost:3000/page/HTML을 입력하면, HTML부분이 pageId 의 값으로 매칭되어 `req.params.pageId`로 그 값을 가져올 수 있게 됩니다.

```jsx
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```

![image4](https://user-images.githubusercontent.com/68391767/108807718-745c4a80-75e8-11eb-8ca6-38252aa3a801.png)
이 경우에는 users 다음에 :userId 라는 라우터 매개변수와 ,books 다음에 :bookId 라는 라우터 매개변수를 사용했습니다. localhost:3000/users/34/books/8989 라는 페이지에 접속하게 되면 34는 :userId와 매칭되고, 8989는 :bookId와 매칭되어 그 값이 됩니다. 이 값은 req.params객체 안에 담기게 되어 나중에 `req.params.userId` 와 `req.params.bookId`로 그 값을 가져올 수 있습니다.

<br>

## express.Router

express.Router 클래스를 사용하여 **길게 연결되어 복잡해보이는 라우터들을 파일로 나눠 구조화**할 수 있습니다. 

#### 1. 먼저 라우터 파일들을 만들어놓을 `/routes 디렉터리`를 만듭니다. routes내의 파일들은 다음과 같은 구조로 이루어집니다. 

```jsx
// /routes/birds.js
var express = require('express');
var router = express.Router();

// 라우터 정의
router.get('/', (req, res) =>{
  console.log('birds home page route - /birds 요청이 들어오면 실행됨');
});

router.get('/about', (req, res) => {
  console.log('/birds/about 요청이 들어오면 실행됨');
});

// ...

module.exports = router;
```

express 모듈을 추가하고, `express.Router`를 이용합니다. 마지막에는 `module.exports`를 통해 이 파일을 모듈로 사용할 수 있도록 해 줍니다.

#### 2. 이후 앱 내에서 라우터 모듈을 불러옵니다.

```jsx
// main.js (app.js)
var birdsRouter = require('./birds');

// ...

app.use('/birds', birdsRouter);
```
