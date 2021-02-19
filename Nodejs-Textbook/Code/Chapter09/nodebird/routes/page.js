const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User } = require('../models');

const router = express.Router();

router.use((req, res, next)=>{
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.followerIdList={};
    next();
});

// 로그인 한 상태에서는 내 정보가 뜨도록 
router.get('/profile', isLoggedIn, (req, res)=>{
    res.render('profile', { title: '내 정보 - NodeBird'});
});


// 로그인하지 않은 상태에서만 회원가입 창이 보여야 하므로, isNotLoggedIn에서만 회원가입이 뜨도록.
router.get('/join', isNotLoggedIn, (req,res)=>{
    res.render('join', { title: '회원가입 - Nodebird'});
});

router.get('/', (req, res, next)=>{
    try{
        const posts = await Post.findAll({
            include: {
                model: User,
                attributes: ['id', 'nick'],
            },
            order: [['createdAt', 'DESC']],
        });
        res.render('main', {
            title: 'NodeBird',
            twits: posts,
        });
    }
    catch (error){
        console.error(error);
        next(error);
    }
    
    
});

module.exports = router;
