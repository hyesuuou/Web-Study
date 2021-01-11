## CSS의 구성
CSS는 선택자, 선언 (속성, 값)으로 구성된다.

```css
span {
  color : red;
}
```

- **Selector (선택자)** : 위의 코드에서 *span*에 해당하는 부분이다. 웹페이지에서 **누구에게 효과를 적용할 것인지 선택**한다고 해서 "Selector(선택자)"라고 부른다.
- **Declaration (선언)** : 위의 코드에서 *color:red*에 해당하는 부분이다. 선택자를 사용할 필요가 없다.
- **Property (속성)** : 위의 코드에서 *color*에 해당하는 부분이다.
- **Value (값)** : 위의 코드에서 *red*에 해당하는 부분이다.

---

## Property (속성)
속성을 모두 외울수는 없으니까, 검색하는 능력을 키우는 것이 중요하다 !!!!

### **글자 크기**를 조정하고 싶은 경우

- 검색어 > CSS text size property
- **font-size 속성** 을 이용한다.
- font-size의 기본값은 16px이다.
- font-size속성은 다음과 같은 방법으로 지정할 수 있다. **em**은 기준값에 대해 상대적인 크기를 배수로 지정하여 나타내는 방법이다.

    ```css
    font-size: 16px;
    font-size: 1em;
    ```

- 이는 상속되므로, 하위요소에 까지 영향을 미치게 된다. 아래의 코드에서 웹페이지에 출력되는 myspan 클래스의 글자는 64px이 된다.

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
        <style>
          body > div {
            font-size:32px;
          }
          .myspan {
            color : #f00;
            font-size: 2em;
          }

        </style>
      </head>
      <body>

        <div>
          <span class="myspan">my text is upper!</span>
        </div>

      </body>
    </html>
    ```
- 예시: h1태그에 해당하는 내용의 font-size를 small로 한다.
	```html
	<style>
	h1 {
	  font-size: small;
	}
	</style>
	```
	![image1](https://user-images.githubusercontent.com/68391767/103760804-fd2f1f00-5058-11eb-8a5e-a6fb4cc411c3.png)

### 가운데 **정렬**을 하고 싶은 경우

- 검색어 > CSS text center property / align
- **text-align 속성**과 center value를 사용한다.

```html
 <style>
   h1 {
     text-align: center;
   }
 </style>
```

![image2](https://user-images.githubusercontent.com/68391767/103760999-4a12f580-5059-11eb-9118-a04c4c0508cd.png)

### 글자 색상을 바꾸고 싶은 경우

- **color** 속성을 사용한다.
- 만약 red 색상을 표시하고 싶으면 다음과 같은 방법으로 작성할 수 있다. 가장 많이 사용하는 방법은 마지막 방법인 16진수로 표현하는 방법이다.
	```css
	color: red;
	color: rgba(255,0,0,0.5);
	color: #ff0000;
	```
- 예시: a 태그부분의 글자색을 black으로 한다.
	```html
	<style>
	  a {
	    color : black;
	  }
	</style>
	```
	![image3](https://user-images.githubusercontent.com/68391767/103761292-c73e6a80-5059-11eb-9e07-140ed6237bcc.png)

### 밑줄을 긋거나 긋지 않고 싶은 경우
- **text-decoration** 속성은 밑줄을 만들고 없애는 속성이다.
- 밑줄 없애는 경우 value : none
- 밑줄 있게 하는 경우 value : underline

```html
<style>
  a {
    color : black;
    text-decoration: none; 
  }
</style>
```

![image4](https://user-images.githubusercontent.com/68391767/103761821-a3c7ef80-505a-11eb-9907-805e306680bc.png)

### 배경을 설정하고 싶은 경우

- 배경색 설정을 위해서는 **background-color 속성**을 사용한다.
- background-image, background-position, background-repeat ... 등
- 이를 모두 한 줄로도 정의할 수 있다

    ```css
    background: #0000ff url(".../gif") no-repeat center top;
    ```
    
### 글씨체, 글꼴을 설정하고 싶은 경우

- **font-family 속성**을 사용한다.

    ```css
    font-family: "Gulim";
    font-family: monospace;
    ```

- 폰트를 여러개 나열하여 상황에 따라 여러개를 사용할 수도 있다. (앞의 것을 사용 못하면 뒤에것이 적용)

---

## Selector (선택자)

선택자 추천 검색어 > css selector

Selector(선택자)는 **트리 구조로 되어있는 데이터를 빠르게 찾아가는 방법**으로, HTML의 요소를 tag, id, html 태그 속성 등을 통해 쉽게 찾아주는 방법이다. 요소에 style을 지정하기 위한 3가지 기본 선택자에는 tag, id, class가 있다.

### tag 로 지정하기

tag로 지정하기 위해서는 아무런 표시없이 tag명만 작성해주면 된다. 아래는 모든 a 태그에 대해 스타일을 적용하는 예시이다.

```html
<style>
	a {
		color : red;
	}
</style>
```

### class 로 지정하기

class로 지정하기 위해서는 앞에 . 을 작성한다. 아래는 모든 spanClass라는 클래스를 가진 항목에 스타일을 적용하는 예시이다.

```html
<style>
     .spanClass {
     color : red
     }
</style>

<body>
     <span class="spanClass"> HELLO World! </span>
</body>
```

클래스의 속성값은 여러개의 값이 들어올 수 있으며 (아래에서는 saw와 active) 띄어쓰기로 구분한다. 또한 하나의 태그에는 여러개의 속성값이 들어올 수 있으며 (아래의 <a>태그) 여러개의 선택자를 통해 하나의 태그를 공동으로 제어할 수 있다.

![image5](https://user-images.githubusercontent.com/68391767/103902934-9126e680-513e-11eb-8050-842a3b820c0b.png)

캡쳐본에서 CSS 의 색상이 빨간색인 이유는 .active가 더 아래에 있기 때문이다. (아래 우선순위 참고) 만약 <style> 태그 안에서 .saw가 .active 보다 아래에 있다면 회색이 되었을 것이다.

### id로 지정하기

id로 지정하기 위해서는 앞에 #을 작성한다. 아래는 모든 spantag라는 id를 가진 항목에 스타일을 적용하는 예시이다.

```html
<style>
     #spantag {
       color : red;
     }
</style>

<body>
     <span id="spantag"> HELLO World! </span>
</body>
```

### 적용 우선순위 - id > class > tag selector

효율적인 코딩을 위해 좀 더 구체적인 것을 포괄적인것 보다 우선적으로 적용한다. 여기서 특히 id는 우리의 주민등록번호와 같이 단 하나만 존재하고, 유일무이한 값이기 때문에 모든 선택자 보다 가장 우선적으로 적용된다. 우선순위가 같다면 아래에 있는 (보다 가까이에 있는) 명령이 더 큰 영향력을 갖는다.

![image6](https://user-images.githubusercontent.com/68391767/103903098-caf7ed00-513e-11eb-9232-12a1adf46a4d.png)
이 캡쳐본을 보면 class Selector인 .saw 보다 id Selector인 #active가 더 위에 있지만, 우선순위가 높으므로 #active의 내용이 우선적으로 적용됨을 볼 수 있다.
