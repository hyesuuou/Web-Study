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
