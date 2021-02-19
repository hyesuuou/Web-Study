const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');
const e = require('express');

module.exports = () =>{
    // 사용자 정보 객체를 세션에 아이디로 저장함
    passport.serializeUser((user,done)=>{
        done(null, user.id);
    });

    // 세션에 저장한 아이디를 통해 사용자 정보 객체를 불러옴. req.user을 통해 불러올 수 있다.
    passport.deserializeUser((id, done)=>{
        User.findOne({ where: { id }})
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local();
    kakao();
};