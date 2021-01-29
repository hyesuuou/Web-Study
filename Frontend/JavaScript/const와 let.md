node.js 교과서

# const, let

### var과 const,let의 차이

var은 const 와 let으로 대체된다. var과 const,let은 스코프 종류가 다르다.

- `var` : 함수 스코프를 갖는다 → 블록({})과 관계없이 접근할 수 있다.
- `const`, `let` : 블록 스코프를 갖는다. → 블록({}) 밖에서는 블록에 접근할 수 없게 되어 호이스팅 문제가 해결되고, 코드관리가 용이해짐.

![const와let](https://user-images.githubusercontent.com/68391767/106286067-96cca380-6288-11eb-8188-2c1b72123df6.png)

<br>

### const와 let의 차이

`const` 는 상수를 선언할 때 사용하며 (값을 변경할 수 없음), `let` 에는 다른 값을 새롭게 할당할 수 있다.

자바스크립트에서는 다른 값을 할당할 경우가 별로 없으므로, 보통 `const` 를 사용하고 다른 값을 할당해야 할 때만 `let` 을 사용한다.

```jsx
const a = 0;
a = 1; // Uncaught TypeError: Assignment to constant variable.

const c; // Uncaught SyntaxError: Missing initializer in const declaration

let b = 0;
b = 1;
```
