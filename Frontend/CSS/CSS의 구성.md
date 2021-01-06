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
