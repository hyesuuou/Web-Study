CSS의 Box model (박스모델)은 html 태그 하나하나를 일종의 박스로 취급하여 부피감을 결정한다.

### Block level / inline element

 **Block level element**는 화면 전체를 사용하는 태그이다. block을 기본값으로 가지고 있는 대표적인 태그는 h1~6 태그가 있다. 이와 달리, **Inline element**는 딱 자기 컨텐츠 만큼의 부피만 사용하는 태그이다. inline을 기본값으로 가지고 있는 대표적인 태그는 a태그가 있다. 

![image1](https://user-images.githubusercontent.com/68391767/104021951-f6441000-5202-11eb-84e9-f14b661bb791.png)

 물론, 언제든지 display 속성을 이용하여 h태그를 inline 태그처럼 사용하거나, a태그를 block level element 처럼 사용할 수도 있다. display: none; 응 이용하여 화면에서 사라지게 할 수도 있다.

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
