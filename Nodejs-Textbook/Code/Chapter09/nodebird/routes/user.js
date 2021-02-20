/* 다른 사용자를 팔로우 하는 라우터 */
const express = require('express');

const { isLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, async (req, res, next)=>{
    try{
        const User = await User.findOne({ where: { id: req.user.id}});
        if (user) {
            await user.addFollowing(parseInt(req.params.id, 10));
            res.send('success');
        }
        else {
            res.status(404).send('no user');
        }
    }
    catch (error){
        console.error(error);
        next(error);
    }
});

module.exports = router;