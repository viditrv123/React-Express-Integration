const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header('x-access-token');
    console.log(token+" /");
    console.log(!token);
    

    if (!token) {
        res.status(401).json({ mes: 'No token, authorization denied' });
        try {
            const decoded = jwt.verify(token, "mysecret");
            req.user = decoded;
            next();
        } catch (e) {
            res.status(400).json({ msg: "token invalid" })
        }
    }
    else
    next();
}
module.exports=auth;