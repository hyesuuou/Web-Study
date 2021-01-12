# CSS의 Layout 방식

element를 화면에 배치하는 것을 **layout작업**, 혹은 **Rendering 작업** 이라고 한다. 기본적으로는 요소들이 위에서 아래로 배치되지만, 여러 속성을 이용하여 다양한 방식으로 배치할 수도 있다. 대표적으로 다음과 같은 속성이 있다.

1. display속성 (block, inline, inline-block)
2. position 속성 (static, absolute, relative, fixed)
3. float 속성(left, right)

</br>

## 1. display 속성
![image1](https://user-images.githubusercontent.com/68391767/104291330-bf217780-54fe-11eb-9e1c-d5e9fac4b35e.png)

### display: block;

display 속성이 block인 경우 (**Block level element**) **화면 전체를 사용하며, 그 요소는 블록의 형태로 쌓인다.** block을 기본값으로 가지고 있는 대표적인 태그로는 div, p, h1~6 태그가 있다. 아래의 코드는 화면의 **위에서 아래방향**으로 채워지며, **높이감을 줄 경우 더 높은 크기로 쌓이게 된다.**

```html
<div>block1</div>
<p>block2</p>
<div>block3</div>
```

물론, 기본값이 block 이라도 **속성값을 원하는 대로 바꿀 수도 있다.** 아래의 코드는 원래 div와 p태그의 기본값이 block 이라 위에서 아래로 채워져야하지만, inline으로 바뀌게 되어 좌에서 우로 채워지게 된다.

```css
div, p {
	display : inline;
}
```

### display: inline;

display 속성이 Inline 인 경우(inline element) 딱 **자기 컨텐츠 만큼의** 부피를 차지하며, 우측과 아래쪽으로 빈자리를 차지하며 흐른다. **inline 속성의 요소는 높이와 넓이를 지정해도 반영되지 않는다**. 대표적인 태그로는 span, a 가 있다.

```html
<div>
  <span>나는 어떻게 배치되나요?</span>
  <span>좌우로 배치되는군요</span>
  <a>링크는요?</a>
  <strong>링크도 강조도 모두 좌우로 흐르는군요</strong>
  모두다 display속성이 inline인 엘리먼트이기 때문입니다.
</div>
```

### display: inline-block;

display 속성이 inline-block이면 inline과 block의 속성을 모두 갖는다. inline-block은 딱 자기 컨텐츠만큼이 부피를 차지하지만, margrin, padding, width 등을 지정하면 block속성과 같이 모두 반영된다.

### display: none;

display속성이 none인 경우, 화면에서 사라지게 할 수 있다.

</br>

## 2. position 속성

position 속성을 이용하면 단순히 위→아래, 좌→우로 흐르는 배치가 아닌, 자유로운 배치를 할 수 있다. position 속성을 통해서 상대적,절대적으로 어떤 위치에 요소를 배치하는 것이 수월해질 수 있다. 

### position: static;

static 은 position의 기본속성으로, 그냥 순서대로 배치된다.

### position: absolute

absolute는 기준점에 따라 특별한 위치에 위치시킬 수 있다. 위치는 top/left/right/bottom으로 설정하며, absolute 부분에는 top과 left값을 0, 0 이라도 주는것이 중요하다.

 기준점은 상위 엘리먼트로 단계적으로 찾아가게 되는데, 상위 요소중에 static이 아닌 position이 기준점이 되며, 만약 상위에 static이 있으면 스킵하고 더 상위로 올라간다. 아래의 코드에서 absolute의 기준점은 .absolute 상위의 .wrap의 position이 static이 아니므로, 이를 기준으로 갖는다. 만약 부모중에 position이 static이 아닌게 없으면, body 태그를 기준점으로 삼게 될 것이다.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

  <div class="wrap">
    <div class="static">static(default)</div>
    <div class="relative">relative(left:10px)</div>
    <div class="absolute">absolute(left:130px;top:30px)</div>
    <div class="fixed">fixed(top:250px)</div>
  </div>
  
</body>
</html>
```

```css
.wrap {
  position:relative;
}

.wrap > div {
  width:150px;
  height:100px;
  border:1px solid gray;
  font-size:0.7em;
  text-align:center;
  line-height:100px;
}

.relative {
  position:relative;
  left:10px;
  1top:10px;
}

.absolute {
  position:absolute;
  left:130px;
  top:30px;
}

.fixed {
  position:fixed;
  top:250px;
}
```

### position: relative

relative는 원래 자신이 위치해야 할 곳을 기준으로 이동하며, top/left/right/bottom으로 설정한다.

### position: fixed

fixed는 viewport(전체화면)의 좌측, 맨 위를 기준으로 동작한다. 이는 스크롤해도 계속 그 위치에 있으며, 광고 등에 사용하는 경우가 많다.
  
  
</br>

## 3. float 속성

float 속성을 이용하면 기존의 배치에서 벗어나 풍선처럼 둥둥 떠다닐 수 있다. 일반적인 배치에서 벗어난 상태로 특별히 배치된다. float의 속성은 이러한 특이성 때문에 웹사이트의 전체 레이아웃 배치에서 유용하게 활용된다.

```css
float: left;
```
