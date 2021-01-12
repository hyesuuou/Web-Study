# Box model
CSS의 Box model (박스모델)은 html 태그 하나하나를 일종의 박스로 취급하여 부피감을 결정한다. margin, padding, border, outline등을 지정하여 box의 크기에 관한 속성을 지정할 수 있다. 

</br>

### padding

여백과 테두리 사이에 여백을 주는 역할을 한다.

```html
<style>
 h1 {
	border: 5px solid red;
	padding: 20px;
 }
</style>
```

![image2](https://user-images.githubusercontent.com/68391767/104022163-43c07d00-5203-11eb-9bb8-daaa61b27097.png)

padding 속성을 늘리면, 엘리먼트의 크기가 달라질 수 있는데 이는 **box-sizing 속성을** 통해 조절할 수 있다. box-sizing 속성의 기본값은 content-box 이지만, 이를 border-box로 바꾸면 element의 크기를 고정하면서 padding 값만 늘릴 수 있다.

```css
box-sizing: border-box;
```

</br>

### margin

테두리와 테두리 사이의 여백을 주는 역할을 한다. 

아래는 CSS 박스를 두개 만들고 둘 사이의 여백을 margin으로 준 예시이다.

```html
<style>
h1 {
	border: 5px solid red;
	padding: 20px;
	margin: 5px;
}
</style>
```

![image3](https://user-images.githubusercontent.com/68391767/104022217-5a66d400-5203-11eb-80f4-ddee50950b16.png)

### width, heigth

폭과 높이를 직접 주고 싶은 경우, width와 height 를 사용한다.

```html
<style>
h1 {
	border: 5px solid red;
	padding: 20px;
	margin: 5px;
	display: block;
	width: 100px;
}
</style>
```

![image4](https://user-images.githubusercontent.com/68391767/104022328-7b2f2980-5203-11eb-987f-2316e4585ca1.png)

</br>

### 중복 코드 제거로 더 효율적으로 작성하는 법

- , (콤마) 를 이용한다. h1과 a 태그 동시에 적용할 때, 둘 다 쓸 필요가 없고 공백으로 구분해서 중복되는 코드를 한번만 작성할 수 있다.
- 중복되는 border를 한 줄에 해결할 수 있다. 이때, 순서는 중요하지 않으며 공백으로 구분한다.

    ```html
    <style>
    	h1,a {
    		/*
    		border-width: 5px;
    		border-color: red;
    		border-style: solid;
    		display: inline;
    		*/
    		border: 5px solid red;
    	}
    </style>
    ```
