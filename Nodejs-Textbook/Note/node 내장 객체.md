# node 내장 객체
## global

global 객체(전역 객체)는 **node.js에서 객체 선언을 하지 않고도 사용할 수 있는 객체**이다. 전역 객체는 **모든 파일에서 접근할 수 있으며**, 브라우저의 window 객체와 비슷하다고 보면 된다. global 객체에는 `console`, `__filename`, `__dirname`, `require` 등이 있다. 이들은 원래 global.console, global.require로 써야 하지만 생략이 가능하다.

> 전역객체의 내부를 보려면 REPL을 이용한다.

```
$ node
> global
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  // ...
}
> global.console
Object [console] {
  log: [Function: log],
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  // ...
}
```

> 전역객체라는 점을 이용하여 **파일간 데이터를 공유할 수 있다.**

```jsx
// globalA.js
module.exports = () => global.message; // return global.message;
```

```jsx
// globalB.js
const A = require('./globalA');

global.message = '안녕하세요';
console.log(A());
```

![global](https://user-images.githubusercontent.com/68391767/106386921-a4b22e00-641a-11eb-9701-aa1b40fdb0bd.png)

globalB.js에서 `global.message`에 '안녕하세요'를 대입하고, globalA 모듈 함수인 A 를 호출해 '안녕하세요'를 출력하게 된다. 이는 `global.messag`e 값을 globalA에서도 접근할 수 있음을 보여준다.


<br>

## console

console 객체는 **보통 디버깅을 위해 사용**하며, 노드에서 global 객체 안에 들어 있다.

[Node.js v15.7.0 Documentation-Console](https://nodejs.org/dist/latest-v14.x/docs/api/console.html#console_console)

### console.log(내용);

작성한 내용을 콘솔에 표시한다. 내용을 `쉼표(,)`로 구분하여 여러 내용을 동시에 표시할 수도 있다.

```jsx
const string = 'abc';
const number = 1;
const boolean = true;

console.log('로그를 콘솔에 출력합니다.');
console.log(string, number, boolean); // [출력] abc 1 true
```

### console.time(레이블);

console.timeEnd(레이블) 과 대응되어 **같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정**한다.

```jsx
console.time('전체 시간');
// 코드..
console.timeEnd('전체 시간'); // [출력] 전체 시간: ~ ms
```

### console.error(에러내용);

에러를 콘솔에 표시하기 위해 사용한다.

```jsx
console.error('에러 메시지는 console.error에 담는다.');
```

### console.table(배열);

객체 리터럴이 배열의 요소로 들어가게 되면, 테이블 형태로 표현된다.

```jsx
console.table([{name: '제로', birth: 1994}, {name: 'hero', birth: 1988}]);
```

![table](https://user-images.githubusercontent.com/68391767/106386832-3a00f280-641a-11eb-9b0e-ea1d8d7d6a02.png)

### console.dir(객체, 옵션);

객체를 콘솔에 표시할 때 사용되며, 두 번째 인수로는 속성을 넣어준다.

```jsx
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
};
// 속성 color는 true이면 콘솔에 색이 입혀지고, false이면 색상이 입혀지지 않는다.
// 속성 depth는 객체 안의 객체를 몇 단계 까지 보여줄지에 관한 속성이며, 기본값은 2 이다.
console.dir(obj, {colors: false, depth: 2}); 
console.dir(obj, {colors: true, depth: 1});
```

![dir](https://user-images.githubusercontent.com/68391767/106386868-66b50a00-641a-11eb-8a8b-0395d88d7f12.png)

### console.trace(레이블);

에러가 어디서 발생했는지 추적할 수 있게 해 준다. 에러 발생시 에러를 알려주기 때문에 자주 사용하지는 않는다. 위치가 나오지 않는다면 나름 유용하다.

```jsx
function b(){
    console.trace('에러 위치 추적');
}

function a(){
    b();
}

a();
```

<br>

## Timer

timer를 제공하는 함수는 노드에서 global 객체 안에 들어있다. set~ 을 통해 설정하고, set~ 이 반환한 아이디를 이용해 clear~ 를 사용하여 타이머를 취소할 수 있다.

[Node.js v15.7.0 Documentation-Timers](https://nodejs.org/dist/latest-v14.x/docs/api/timers.html#timers_timers)

### setTimeout(콜백함수, 밀리초);

**주어진 밀리초(1/1000초)이후에 콜백함수를 실행한다**. setTimeout(콜백함수, 0)은 setImmediate(콜백함수)와 헷갈릴 여지가 있으므로 사용하지 않는 것을 권장한다. setTimeout은 아이디를 반환하며, 반환된 아이디를 이용해 `clearTimeout(아이디);` 함수를 사용하면 setTimeout을 취소할 수 있다.

```jsx
// setTimeout 실행 후 아이디를 timeout에 반환한다.
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);
```

아래 코드에서는  `clearTimeout(timeout2)` 가 2.5초만에 실행되기 때문에, 3초가 지나야 실행되는 setTimeout의 콜백함수는 **실행하지 못한다.**

```jsx
const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.'); 
}, 3000);

setTimeout(()=>{
    clearTimeout(timeout2);
}, 2500);
```

### setInterval(콜백함수, 밀리초);

**주어진 밀리초(1/1000초)마다 콜백함수를 반복해서 실행한다.** 반환된 아이디로 `clearInterval(아이디);` 를 해주면 setInterval을 취소할 수 있다.

아래 코드는 setInterval이 2번 실행되고나서 2.5초가 되면 clearInterval이 실행되기 때문에 더 이상 setInterval이 실행되지 않는다.

```jsx
// setInterval 실행 후 아이디를 interval에 반환한다.
const interval = setInterval(()=>{
    console.log('1초마다 실행');
}, 1000);

setTimeout(()=>{
    clearInterval(interval);
}, 2500);
```

### setImmediate(콜백함수);

**콜백함수를 즉시 실행한다**. 반환된 아이디로 `clearImmediate(아이디);` 를 하면 setImmediate를 취소할 수 있다.

```jsx
// setImmediate 실행 후 아이디를 immediate에 반환한다.
const immediate = setImmediate(()=>{
    console.log('즉시 실행');
});
```

아래의 immediate2는 clearImmediate를 통해 바로 취소되기 때문에 실행되지 않는다.

```jsx
const immediate2 = setImmediate(()=>{
    console.log('실행되지 않습니다.');  // 아래 코드때문에 실행되지 않음
});

// clearImmediate(아이디) : setImmediate를 취소한다.
clearImmediate(immediate2);
```

<br>

## __filename, __dirname

### __filename

[Node.js v15.7.0 Documentation-module_filename](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_filename)

실행 시에 **현재 파일의 경로**로 바뀐다.

```jsx
// '/Users/Kim' 디렉터리의 'filename.js' 파일을 실행했을 때
console.log(__filename);  // [출력] /Users/Kim/filename.js
```

### __dirname

[Node.js v15.7.0 Documentation-module_dirname](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_dirname)

실행 시에 **현재 폴더의 경로**로 바뀐다. path.dirname(__filename)과 같다.

```jsx
// '/Users/Kim' 디렉터리의 'filename.js' 파일을 실행했을 때
console.log(__dirname);  // [출력] /Users/Kim
console.log(path.dirname(__filename)); // [출력] /Users/Kim
```

<br>

## exports, module.exports

[Node.js v15.7.0 Documentation_exports](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_exports)

[Node.js v15.7.0 Documentation_module_exports](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_module_exports)

exports와 module.exports가 **같은 객체를 참조**하기 때문에 동일하게 동작한다. nodejs공식문서 에서도 'A reference to the `module.exports` that is shorter to type' 이라고 나와있다.

```jsx
console.log(module.exports === exports); // true
```

아래 두 코드는 동일하게 동작하는 코드이다. `module.exports` 에는 어떤 값이든 대입이 가능하지만, `exports`에는 반드시 객체처럼 속성명과 속성값을 대입해야 한다. 만약 다른 값을 대입하면 참조 관계가 끊기므로 모듈로 사용할 수 없다.

또한 `exports`는 객체만 사용가능하므로 함수는 꼭 `module.exports`로만 쓸 수 있다. 둘은 혼동되기 때문에 동시에 사용하지 않도록 하자!

```jsx
const odd = '홀수입니다.';
const even = '짝수입니다.';

// module 객체 사용 
module.exports = {
    odd,
    even
};
```

```jsx
// exports 객체 사용하여 모듈 만들기
exports.odd = '홀수입니다.';
exports.even = '짝수입니다.';
```

<br>

## require

[Node.js v15.7.0 Documentation_require](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_require_id)

**require(id)는** 모듈을 불러오는 객체이다. 여기서 id에는 모듈 이름이나, 모듈의 경로가 들어가고, require은 모듈의 내용을 리턴한다. `require`은 가장 최상단에 위치할 필요가 없다. (마찬가지로 module.exports도 최하단에 위치할 필요없음.)

```jsx
// 모듈 경로로 불러오기
const dep1 = require('./dep1');

// 모듈 이름으로 불러오기
const url = require('url');
```

### require.cache

한 번 require한 파일은 require.cache에 저장되어 다음에 require할 때에는 새로 불러올 필요 없이 재사용된다. 만약, cache의 속성을 제거한다면 다음 require에 새로 불러올 수 있게 된다.

### require.main

노드  **실행 시 첫 번째 모듈(entry script)** 을 가리킨다. require.cache와 모양이 같다.

```jsx
// entry.js
console.log(reauire.main);
```

```jsx
$ node entry.js
Module {
	id: '.';
	//path: ...
	...
}
```

현재 파일이 첫 번째 모듈인지 궁금하면 아래와 같이 확인해보면 된다. 만약 현재 파일이 `$ node 현재파일` 로 실행되었으면 true로, `require`에 의해 실행되었다면 false가 리턴될 것이다.

```jsx
console.log(require.main === module) // 첫번째 모듈: true, 아니면: false
```

### require의 순환참조 (Circular dependency)

[Node.js v15.7.0 Documentation_cycles](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_cycles)

에러가 발생하지 않고, **순환참조되는 대상을 빈 객체로 만든다.** 

```jsx
// dep1.js 
const dep2 = require('./dep2');
console.log('require dep2', dep2);
module.exports = () => {
    console.log('dep2', dep2);
};
```

```jsx
// dep2.js
const dep1 = require('./dep1');

console.log('require dep1', dep1);
module.exports = () => {
    console.log('dep1', dep1);
};
```

```jsx
// dep-run.js
const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();
```

```
$ node dep-run
require dep1 {}
require dep2 [Function (anonymous)]
dep2 [Function (anonymous)]
dep1 {}
(node:16263) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
....
....
```
