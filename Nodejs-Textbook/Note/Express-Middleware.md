# Middleware

미들웨어(middleware)는 **요청과 응답의 중간에 위치**하여 받은 요청을 조작하여 기능을 추가하거나, 나쁜 요청을 걸러내는 등의 역할을 합니다. 라우터와 에러 핸들러도 미들웨어의 일종이라고 할 수 있습니다.

- `(req, res, next)` 3개의 인자를 가지고 있습니다.
- 미들웨어는 여러 개 장착할 수 있고, 이는 **위에서 아래로** 실행됩니다.
- `next()` 메서드를 이용하여 다음 미들웨어로 넘어갈 수 있습니다. next() 없이는 다음 미들웨어를 실행할 수 없습니다.
- `next(인수)`에 인수를 넣어 특정 미들웨어로 이동시킬 수도 있습니다.

## Application-level middleware

`app.use(미들웨어)`나 `app.METHOD(미들웨어)` 를 통해 사용되는 미들웨어를 **application-level middleware**라고 합니다. (여기서 METHOD는 HTTP 요청 메서드를 말하며, 대표적으로 get, post, put 등이 있습니다.) 

- application-level middleware는 어플리케이션 전역에서 사용되며, **어플리케이션에 요청이 발생할 때마다 실행**됩니다.

```jsx
app.use((req, res, next)=> {
  console.log('어떤 요청이든 다 실행됨.');
  next();
});
```

- `app.use`나 `app.Method` 의 주소가 지정되어 있으면, **해당하는 주소에서만 실행**됩니다.

```jsx
app.use('/abc'. (req, res, next)=>{
  console.log('/abc로 시작하는 요청에서 미들웨어 실행');
  next();
});
```

- **해당하는 method 요청에서만 실행**됩니다.

```jsx
app.post('/', (req, res, next)=>{
  console.log('post 요청에서만 실행');
	next();
});
```

```jsx
app.get('/', (req, res, next)=>{
  console.log('get 요청에서만 실행');
  next();
});
```

## Router-level middleware

Application-level 미들웨어와 기본적인 동작 방식은 같습니다. 하지만 Router-level middleware는 `express.Router()` 인스턴스를 기반으로 하기 때문에 `router.use()`나 `router.METHOD()`에 장착하여 사용합니다.

```jsx
var router = express.Router();
```

- 해당 라우터 요청이 있을 때마다 실행됩니다.

```jsx
router.use(function (req, res, next) {
  console.log('해당 라우터의 요청이 있을 때마다 실행됨');
  next();
});
```

- 만약 localhost:3000/user/page1 GET요청이 들어온다면?

```jsx
// app.js
var app = express();
var userRouter = require('user.js');

app.use('/user', userRouter);
```

```jsx
// user.js (/user 라우터 코드)
var app = express();
var router = express.Router();

router.get('/page1', (req, res, next)=>{
  console.log('localhost:3000/user/page1 이 요청되면 실행');  // 이 부분 실행됨!
});

router.get('/page2', (req, res, next)=>{
  console.log('localhost:3000/user/page2 이 요청되면 실행');
});
```

## Error-handling middleware

**에러 처리를 담당하는 미들웨어**를 error-handling middleware 라고 합니다.

- 4개의 인수 `(err, req, res, next)`를 가지고 있으며, err에는 에러에 대한 정보가 담겨 있습니다.

```jsx
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

- 에러가 발생할 수 있는 미들웨어에서 `next(err)`를 해 주면, 에러처리 미들웨어로 넘어가게 됩니다.

<br>

## 자주 쓰는 미들웨어 

### body-parser 미들웨어

body-parser은 사용자가 전송한 **본문의 데이터를 해석하여 `req.body` 객체로 만들어주는 역할을 하는 미들웨어**입니다. body-parser 미들웨어는 멀티파트 데이터(이미지, 동영상, 파일)를 처리하지 못하므로 이때는 multer 모듈을 사용해야 합니다.

설치는 `$ npm intall body-parser` 로 합니다.

```jsx
var bodyParser = require('body-parser')
```

요청 데이터의 종류에 따라 `bodyParser.unlencoded()`과 `bodyParser.json()` 으로 나눠집니다. 

- **form 데이터를 전송하는 경우**, unlencoded()를 사용합니다. 이때 extended 속성이 false인 경우에는 querystring 모듈을 사용하여 쿼리스트링을 해석하고, true인 경우에는 qs 모듈을 사용하여 쿼리스트링을 해석합니다. (qs 모듈은 querystring 모듈의 기능을 확장한 모듈입니다.)
    - 만약 URL-encoded 형식으로 *name=kim&study=node* 를 본문으로 보내면, `req.body` 부분에 `{ name: 'kim', study: 'node' }` 가 들어갑니다.
- **json 형식의 데이터를 전송하는 경우**에는 json()을 사용합니다.
    - json 형식으로 `{ name: 'kim', study: 'node' }` 가 들어간다면, 이 내용이 그대로 `req.body`에 들어갑니다.

```jsx
// form 전송시
app.use(bodyParser.urlencoded({ extended: false }))
// json 전송시
app.use(bodyParser.json())
```

<br>

### compression 미들웨어

웹서버가 웹브라우저에게 응답할 때, 그 **내용을 압축하여 용량을 줄입니다**. 

설치는 `$ npm install compression` 으로 합니다.

```jsx
var compression = require('compression')
```

`compression()` 은 미들웨어를 반환하고, 반환된 미들웨어를 `app.use`에 장착하여 사용합니다. compression을 사용하면 [header] - [Response Headers] - [Content-encoding]은 **gzip** 으로 나타납니다.

```jsx
// compress all responses
app.use(compression())
```
