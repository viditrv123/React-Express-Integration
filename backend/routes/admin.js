const router=require('express').Router();
let User =require('../models/user.model');

router.route('/dashboard').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));

});

router.route('/').post((req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    

    User.find({'username':username},(err,user1)=>{
        if(err)
        console.log(err);
        else{
            console.log(user1[0]);
            
            if(user1[0].password===password&&user1[0].admin==true)
            res.json(user1);
            else
            res.json("0");
        }
        
    })
        
        
});

module.exports=router;