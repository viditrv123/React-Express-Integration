const jwt = require("jsonwebtoken");
const router = require('express').Router();
const bcrypt = require("bcryptjs");
const auth=require("../middleware/auth");
let User = require('../models/user.model');

router.get('/',auth,(req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/register').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const admin = false;
    var id=0;
    if (!username || !password) {
        return res.status(400).json({ msg: 'Please enter valid fields' });
    }
    
    User.find()
        .then(user=>{
            id=user.length+1;
        })
        .catch(err=>console.log(err));
        
    User.findOne({ username })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });
            else {
                const newUser = new User({ id,username, password, admin });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then((user) => {

                                jwt.sign({ id: user.id }, 'mysecret', { expiresIn: 3600 }, (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            username: user.username
                                        }
                                    });
                                })
                            })


                            .catch(err => res.status(400).json('Error:' + err));
                    });
                });
            }

        })
        .catch(err=>res.status(404).json('error'+err));







});




router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    if (!username || !password) {
        return res.status(400).json({ msg: 'Please enter valid fields' });
    }
    User.findOne({ username })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exists' });
            else{
                bcrypt.compare(password, user.password)
                .then(isMatch=>{
                    if(!isMatch) return res.status(400).json({msg:"Invalid credentialss"});
                    jwt.sign({ id: user.id }, 'mysecret', { expiresIn: 3600 }, (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                username: user.username
                            }
                        });
                    })
                })
            }

        })
        .catch(err=>res.status(404).json('error'+err));
});


module.exports = router;