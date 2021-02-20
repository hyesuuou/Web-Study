const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User, Hashtag } = require('../models');

const router = express.Router();

router.use((req, res, next)=>{
    res.locals.user = null;
    res.locals.followerCount = req.user ? req.user.Followers.length : 0;
    res.locals.followingCount = req.user ? req.user.Followings.length : 0;
    res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : [];
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

router.get('/', async (req, res, next)=>{
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

// 해시태그로 조회하는 GET /hashtag 라우터
router.get('/hashtag', async (req, res, next)=>{
    const query = req.query.hashtag;
    if (!query){    // 해시태그값이 없는 경우
        return res.redirect('/');   // 메인페이지로 보냄
    }
    try {
        // 데이터베이스에서 해당 해시태그 검색 
        const hashtag = await Hashtag.findOne({ where : { title : query}});
        let posts = [];
        if (hashtag) {
            // 포스터 가져오기
            posts = await hashtag.getPosts({ include: [{ model: User }]});
        }
        
        return res.render('main', {
            title : `${query} | NodeBird`,
            twits: posts,
        });
    }
    catch(error){
        console.error(error);
        return next(error);
    }
})

module.exports = router;
