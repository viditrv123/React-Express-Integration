const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header('x-auth-token');

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
}
module.exports=auth;