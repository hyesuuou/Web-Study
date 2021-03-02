## cookie lifetime

### 1. session cookies

세션 쿠키는 현재 세션이 끝날 때 삭제되는 쿠키를 말하며, 브라우저를 닫으면 삭제되는 쿠키를 말합니다.

### 2. permanent cookies

영속적인 쿠키는 세션이 끝나는 여부와 관계없이, `Expires` 속성에 명시된 날짜에 삭제되거나, `Max-age` 속성에 명시된 기간 이후 삭제되는 쿠키를 말합니다. permanent cookies는 다음과 같이 설정할 수 있습니다.

- `Expires=날짜` 속성을 이용하는 방법 : 만료기한을 설정하는 속성으로, Expires에 명시된 날짜에 쿠키가 삭제됩니다. 기본값은 클라이언트 종료시 입니다.

```jsx
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

- `Max-age=초` 속성을 이용하는 방법 : Expires와 비슷하지만, 날짜 대신 초를 설정할 수 있으며 현재 시점을 기준으로 해당 초가 지나면 쿠키가 삭제됩니다. 0또는 음수가 값으로 지정되면 해당 쿠키는 그 즉시 만료외며, Expires보다 우선시 합니다.

```jsx
'Set-Cookie':[
  `Permanent=cookies; Max-age=${60*60*24*30}`,
]
```

<br>

## Secure

웹 브라우저와 웹 서버가 **HTTPS로 통신하는 경우에만** 쿠키가 전송됩니다. `Secure` 이라는 속성을 추가하면 사용할 수 있습니다.

```jsx
'Set-Cookie': 'Secure=Secure; Secure'
```

- response headers

![](https://user-images.githubusercontent.com/68391767/109654844-0a264580-7ba6-11eb-91da-c3c4e28114d8.png)

- Request headers

<img width="662" alt="image" src="https://user-images.githubusercontent.com/68391767/109655099-3cd03e00-7ba6-11eb-9e1b-dcfd4e534f0b.png">

<br>

## HttpOnly

`HttpOnly` 속성을 추가하면, JavaScript에서 쿠키에 접근할 수 없습니다. 때문에 console에서 `document.cookie`로 불러올 수 없습니다.

```jsx
'Set-Cookie':[
            'yummy_cookie=choco', 
            'tasty_cookie=strawberry',
            `Permanent=cookies; Max-age=${60*60*24*30}`,
            'Secure=Secure; Secure',
            'HttpOnly=HttpOnly; HttpOnly'
        ]
```

<img alt="image" src="https://user-images.githubusercontent.com/68391767/109655157-4bb6f080-7ba6-11eb-959c-54188f52b29b.png">


Application-cookies 창에서는 HttpOnly 가 나와있는 것을 볼 수 있습니다.

<img width="649" alt="image" src="https://user-images.githubusercontent.com/68391767/109655185-53769500-7ba6-11eb-8d20-fade11dee8fc.png">


하지만, 콘솔창에서 자바스크립트를 이용해 쿠키에 접근하면, HttpOnly에 해당하는 쿠키의 내용은 출력되지 않습니다.
