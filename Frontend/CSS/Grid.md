# Grid

CSS 그리드는 다양한 레이아웃을 쉽게 구현할 수 있다. 

### Grid 만들기

- **div, span**을 이용하여 묶고, id값을 준다.

    그리드를 만들어 주기 위해서는 아무 의미 없는 **div 태그**와 **span 태그**로 그룹을 만들어주면 된다. 여기서 div태그는 block level 태그이고, span 태그는 inline 태그이다.

- 해당 id값의 style 안에 **display: grid;** 를 이용하여 그리드를 사용하도록 설정해준다.
- **grid property 를 설정**해준다. (ex. grid-template-row, grid-template-column 등..)

```html
<<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      #grid {
        border: 5px solid pink;
        display: grid;
        grid-template-columns: 150px 1fr;
      }

      div {
        border: 5px solid gray;
      }

    </style>
  </head>
  <body>
    <div id="grid">
      <div>NAVIGATION</div>
      <div>ARTICLE</div>
    </div>
  </body>
</html>
```

![image1](https://user-images.githubusercontent.com/68391767/104092832-dcb9cb80-52c9-11eb-858e-faf6e5ed1289.png)

여기서는 NAVIGATION과 ARTICLE을 각각 div태그로 묶어 회색 박스로 경계를 주었고, 이 둘을 상위 <div>태그로 다시 묶어 id값을 grid로 주었다. 이 상위 태그에 대해 grid-template-columns를 통해 옆에 위치하도록 하였고, 각각 150px 와 1fr의 크기를 지정했다. 이렇게 하면 먼저 나오는 NAVIGATION은 150px로 고정되게 되고, ARTICLE 은 1fr에 해당하므로 창의 크기에 맞춰진다. (만약 2fr 1fr 이라면 2:1의 비율로 창의 크기에 맞춰짐)
