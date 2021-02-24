# 미들웨어(middleware)

미들웨어(middleware)는 **요청과 응답의 중간에 위치**하여 받은 요청을 조작하여 기능을 추가하거나, 나쁜 요청을 걸러내는 등의 역할을 한다. 라우터와 에러 핸들러도 미들웨어의 일종이다.

## 미들웨어의 사용

### app.use

미들웨어는 `app.use(미들웨어)` 꼴로 사용한다.

- `app.use`에 매개변수가 `(req, res, next)` 인 함수를 넣는다.
- `next()`는 다음 미들웨어로 넘어가는 함수로, 미들웨어를 여러개 연결할 수는 있지만, next가 없으면 다음 미들웨어를 실행할 수 없다.

```jsx
app.use((req, res, next)=> {
	console.log('모든 요청에 다 실행됨.');
	next();
});
```

첫 번째 인수로 주소를 넣어 주면 해당하는 요청에서만 실행된다.

```jsx
app.use('/abc', (req, res, next)=>{
    console.log('abc로 시작하는 요청에서 미들웨어 실행')
});
```

### app.METHOD

METHOD는 미들웨어가 처리하는 요청들 (get, post, put 등) 을 말한다. app.get(미들웨어), app.post(미들웨어), app.put(미들웨어) 등의 방식으로 사용한다. 

```jsx
app.post('/abc'. (req, res, next)=>{
	console.log('abc로 시작하는 post요청에서 미들웨어 실행');
	next();
});
```

### 에러 처리 미들웨어

매개 변수를 `(err, req, res, next)` 로 4개를 넣어 사용한다. 에러 처리 미들웨어는 익스프레스가 기본적으로 에러를 처리하긴 하지만, 직접 연결해 주는 것이 좋다. 위치는 가장 아래쪽에 넣도록 하는 것이 좋다.

- `err` 는 첫번째 매개변수로, 여기에는 에러에 관한 정보가 담겨있다.
- `res.status` 메서드를 이용하여 HTTP 상태코드를 지정할 수 있다. (기본값: 200)

```jsx
app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
});
```

<br>

## 미들웨어의 종류

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
