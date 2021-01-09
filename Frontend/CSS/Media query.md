# Media Query

### Respeonsive web?

반응형 디자인이란, 화면의 크기에 따라서 웹페이지들의 각 요소들이 이에 반응해 최적화된 모양으로 바뀌게 하는 것을 말한다. 반응형 디자인, 반응형 웹, responsive web 등으로 불린다. 반응형 디자인을 CSS를 통해 구현하는 핵심적인 기능이 바로 미디어쿼리(Media Query)이다. 

### Media query 의 중요성

미디어 쿼리를 활용하면 화면 크기에 따라 (ex, 가로모드, 세로모드 등에 활용) 화면의 특성이 어떠한 조건을 만족할 때만 CSS 코드 내용이 동작하도록 할 수 있다. 따라서 미디어 쿼리는 여러가지의 화면이 존재하는 웹페이지에서 매우 중요하게 작동하고 있다.

```html
<<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      div {
        border : 10px solid green;
        font-size: 60px;
      }
			
      /* screen width < 800px */
      @media(max-width:800px){
        div{
          display: none;
        }
      }

    </style>
  </head>
  <body>
    <div>
      Responsive
    </div>
  </body>
</html>
```

위 코드에서  @media(max-width:800px){} 부분이 미디어 쿼리가 작동하는 부분이다. 여기서는 screen width 가 800보다 작을 때, div 태그에 display:none이 작동되어 화면에 표시되지 않는다. 반대로 screen width가 800보다 커지면 이 코드가 작동되지 않아 화면에 보이게 된다.

- max-width 사용 : 작성한 사이즈 이하에서 css 코드가 작동한다.
- min-width 사용: 작성한 사이즈 이상에서 css 코드가 작동한다.
