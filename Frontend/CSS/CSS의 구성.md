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
