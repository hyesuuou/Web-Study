## serializeUser / deserializeUser

### passport.serializeUser

serializeUser은 로그인을 할 때 실행되며, **사용자 정보 객체를 세션** (req.session(세션)객체) **에 아이디로 저장**합니다.

```jsx
passport.serializeUser((user, done) => {
  done(null, user.id);
});
```

`done` 함수의 두 번째 인수 `user.id` 는 deserializeUser의 매개변수(`id`)가 됩니다.

### passport.deserializeUser

로그인 시에만 실행되는 serializeUser와 달리, **deserializeUser은 매 요청시 실행됩니다.** 세션에 저장한 아이디를 통해서 **사용자 정보 객체를 불러옵니다**.

```jsx
passport.deserializeUser((id, done) => {
  User.findOne({ where : { id } })
    .then(user => done(null, user))
    .catch(err => done(err));
});
```

조회한 정보를 `req.user` 에 저장하기 때문에, 이후 로그인한 사용자의 정보를 `req.user` 을 통해 가져올 수 있습니다.
