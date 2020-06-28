const router=require('express').Router();
let User =require('../models/user.model');
const auth=require("../middleware/auth");

router.get('/user',auth,(req,res)=>{
    console.log("I am Here");
    
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));

});

router.get('/user/:id',(req,res)=>{
    console.log("I am Here");
    console.log(req.params);
    
    User.findById(req.params)
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));

});

router.post('/login',auth,(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    if (!username || !password) {
        return res.status(400).json({ msg: 'Please enter valid fields' });
    }
    User.findOne({ username })
        .then(user => {
            console.log(user);
            
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

module.exports=router;