exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()){
        next();
    }
    else {
        res.status(404).send('로그인 필요');
    }
};

exports.isNotLoggedIn = (req, res, next) =>{
    if (!req.isAuthenticated()){
        next();
    }
    else{
        const message = encodeURIComponent('로그인한 삳태입니다.');
        res.redirect(`/?error=${message}`);
    }
}