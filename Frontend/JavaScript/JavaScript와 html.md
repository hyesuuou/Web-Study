# JavaScript의 등장

### java script의 등장

자바 스크립트가 있기 전에는 html 이 있었는데, 이 html 은 그저 정적으로 사용자에게 웹페이지를 보여주는 역할만 했었다. 사람들은 웹페이지도 게임처럼 사용자들과 상호작용하기를 원했고, 이에따라 나타난 기술이 바로 java script이다.

그리하여 웹은 html 을 이용하여 먼저 만들어진 후에, j**avascript를 이용해서 html을 제어하고**, **사용자와의 상호작용할 수 있는** 기능을 추가하며 성장해나갔다.

</br>

# JavaScript를 html안에서 작동시키기

## 1. Script 태그 이용

html 안에 javascript 코드를 넣기 위해서는 **script태그** 사이에 javascript 코드를 작성하면 된다

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>JavaScript</h1>
    <script>
      document.write('hello world ');
      document.write(1+1);
    </script>
    <h1>html</h1>
    hello world
    1+1
  </body>
</html>
```

여기서 중간부분을 살펴보자.

```html
<h1>JavaScript</h1>
<script>
	document.write('hello world ');
	document.write(1+1);
</script>
<h1>html</h1>
hello world
1+1
```

javascript코드와 html코드가 차이 없어 보이지만, 그 결과에는 차이가 나타난다. html은 정적인 페이지를 보여주기 때문에 1+1은 영원히 1+1일 수 밖에 없다. 하지만 자바 스크립트로 작성한 document.write(1+1)은 1+1을 2로 계산하여 계산된 값을 보여준다.

![image1](https://user-images.githubusercontent.com/68391767/104465019-f1ae9b80-55f6-11eb-860f-5d2ad792b6ea.png)

</br>

## 2. event 속성 이용하기

이벤트 속성은 on~ 속성을 말하며, 이벤트 속성을 이용해서 사용자와 상호작용하는 코드를 만들 수 있다.   이벤트 속성 값에는 **반드시 javascript코드가 와야 하며**, 이 **속성값은 웹 브라우저가 기억하다가 사용자가 event속성에 관한 행동을 취했을 때 해당 javascript 코드를 실행**시킨다. event 속성에는 onclick(클릭했을 때), onchange(내용이 변했을 때) 등이 있다.

- 검색어 예시 : javascript keydown event attribute
- 사용예시

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input type="button" value="hi" onclick="alert('hi')">
    <input type="text" onchange="alert('changed')">
    <input type="text" onkeydown="alert('key down!')">

  </body>
</html>
```

![image2](https://user-images.githubusercontent.com/68391767/104465149-14d94b00-55f7-11eb-8a2e-47252a92ee51.png)

</br>

## 3. console 이용

크롬 검사 - console 창 (element창에서 esc)을 이용하면 파일을 만들지 않고도 javascript코드를 실행할 수 있다. 이때, console 창은 열려있는 페이지에서 작동하게 된다. 콘솔을 이용하면 이미 있는 웹페이지 정보에 대해서 나의 필요에 따라 문제를 해결할 수 있게 된다.
![image3](https://user-images.githubusercontent.com/68391767/104465280-389c9100-55f7-11eb-8eca-e09177e3214f.png)
